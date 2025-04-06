import sys
sys.stdout.reconfigure(encoding='utf-8')
import sqlite3
from datetime import datetime, timedelta

# Conexão com o banco de dados
def connect_db(db_path="db.sqlite3"):
    conn = sqlite3.connect(db_path)
    conn.text_factory = lambda x: str(x, "utf-8", "ignore")  # Enforce UTF-8 decoding
    return conn

# a) Mostrar uma lista com o texto de todas as questões em BD.
def get_all_questions_text(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT questao_texto FROM Questao")
    return [row[0] for row in cursor.fetchall()]

# b) Mostrar as opções da questão em que o texto começa com “Gostas de…”.
def get_options_for_question(conn, question_start):
    cursor = conn.cursor()
    cursor.execute("""
        SELECT Opcao.opcao_texto 
        FROM Opcao 
        JOIN Questao ON Opcao.questao_id = Questao.id 
        WHERE Questao.questao_texto LIKE ?
    """, (f"{question_start}%",))
    return [row[0] for row in cursor.fetchall()]

# c) Mostrar as opções com número de votos superior a 2 da questão em que o texto começa com “Gostas de…”.
def get_options_with_votes_above(conn, question_start, min_votes):
    cursor = conn.cursor()
    cursor.execute("""
        SELECT Opcao.opcao_texto 
        FROM Opcao 
        JOIN Questao ON Opcao.questao_id = Questao.id 
        WHERE Questao.questao_texto LIKE ? AND Opcao.votos > ?
    """, (f"{question_start}%", min_votes))
    return [row[0] for row in cursor.fetchall()]

# d) Mostrar uma lista das questões publicadas nos últimos 3 anos.
def get_recent_questions(conn, years=3):
    cursor = conn.cursor()
    cutoff_date = datetime.now() - timedelta(days=years * 365)
    cursor.execute("""
        SELECT questao_texto 
        FROM Questao 
        WHERE pub_data >= ?
    """, (cutoff_date.strftime("%Y-%m-%d"),))
    return [row[0] for row in cursor.fetchall()]

# e) Calcular e mostrar o número total de votos que estão registados na base de dados.
def get_total_votes(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT SUM(votos) FROM Opcao")
    return cursor.fetchone()[0] or 0

# f) Percorrer todas as questões da DB e, para cada uma, mostrar o texto da questão e o da opção que tiver mais votos.
def get_question_and_top_option(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT id, questao_texto FROM Questao")
    questions = cursor.fetchall()
    result = []
    for question_id, question_text in questions:
        cursor.execute("""
            SELECT opcao_texto 
            FROM Opcao 
            WHERE questao_id = ? 
            ORDER BY votos DESC 
            LIMIT 1
        """, (question_id,))
        top_option = cursor.fetchone()
        if top_option:
            result.append((question_text, top_option[0]))
    return result

# Testando as funções
if __name__ == "__main__":
    conn = connect_db()

    print("a) Todas as questões:")
    try:
        print(get_all_questions_text(conn))
    except UnicodeDecodeError as e:
        print(f"UnicodeDecodeError: {e}")

    print("\nb) Opções da questão que começa com 'Gostas de...':")
    print(get_options_for_question(conn, "Gostas de"))

    print("\nc) Opções com mais de 2 votos da questão que começa com 'Gostas de...':")
    print(get_options_with_votes_above(conn, "Gostas de", 2))

    print("\nd) Questões publicadas nos últimos 3 anos:")
    print(get_recent_questions(conn))

    print("\ne) Número total de votos:")
    print(get_total_votes(conn))

    print("\nf) Texto da questão e da opção com mais votos:")
    for question, top_option in get_question_and_top_option(conn):
        print(f"Questão: {question} | Opção com mais votos: {top_option}")

    conn.close()