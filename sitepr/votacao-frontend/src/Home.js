import QuestionTable from "./QuestionTable";
import Header from "./Header";
import {Container, Row, Col} from "reactstrap";
function Home() {
    return (
        <>
            <Header />
            <Content/>
        </>
    );
}

function Content() {
    return (
        <Container style={{marginTop: "20px", maxWidth: "800px"}}>
            <Row>
                <Col>
                    <QuestionTable/>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;