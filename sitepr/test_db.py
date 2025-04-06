import sys
sys.stdout.reconfigure(encoding='utf-8')
import sqlite3
from datetime import datetime, timedelta

def connect_db(db_path="db.sqlite3"):
    conn = sqlite3.connect(db_path)
    return conn

def get_all_questions_text(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT questao_texto FROM votacao_questao") 
    return [row[0] for row in cursor.fetchall()]

def get_options_for_question(conn, question_start):
    cursor = conn.cursor()
    cursor.execute("""
        SELECT votacao_opcao.opcao_texto 
        FROM votacao_opcao 
        JOIN votacao_questao ON votacao_opcao.questao_id = votacao_questao.id 
        WHERE votacao_questao.questao_texto LIKE ?
    """, (f"{question_start}%",))
    return [row[0] for row in cursor.fetchall()]

def get_options_with_votes_above(conn, question_start, min_votes):
    cursor = conn.cursor()
    cursor.execute("""
        SELECT votacao_opcao.opcao_texto 
        FROM votacao_opcao 
        JOIN votacao_questao ON votacao_opcao.questao_id = votacao_questao.id 
        WHERE votacao_questao.questao_texto LIKE ? AND votacao_opcao.votos > ?
    """, (f"{question_start}%", min_votes))
    return [row[0] for row in cursor.fetchall()]

def get_recent_questions(conn, years=3):
    cursor = conn.cursor()
    cutoff_date = datetime.now() - timedelta(days=years * 365)
    cursor.execute("""
        SELECT questao_texto 
        FROM votacao_questao 
        WHERE pub_data >= ?
    """, (cutoff_date.strftime("%Y-%m-%d"),))
    return [row[0] for row in cursor.fetchall()]

def get_total_votes(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT SUM(votos) FROM votacao_opcao")
    return cursor.fetchone()[0] or 0

def get_question_and_top_option(conn):
    cursor = conn.cursor()
    cursor.execute("SELECT id, questao_texto FROM votacao_questao")
    questions = cursor.fetchall()
    result = []
    for question_id, question_text in questions:
        cursor.execute("""
            SELECT opcao_texto 
            FROM votacao_opcao 
            WHERE questao_id = ? 
            ORDER BY votos DESC 
            LIMIT 1
        """, (question_id,))
        top_option = cursor.fetchone()
        if top_option:
            result.append((question_text, top_option[0]))
    return result

if __name__ == "__main__":
    conn = connect_db()

    print("a) Todas as questões:")
    print(get_all_questions_text(conn))

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