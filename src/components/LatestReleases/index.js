import styled from "styled-components";
import { books } from './latestReleasesData';
import { Title } from '../Title';
import SugestionCard from "../SugestionCard";
import bookImagem from '../../images/livro2.png';

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

`
const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title color="#EB9B00" size="36px">Últimos Lançamentos</Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt={book.nome} />
                ))}
            </NewBooksContainer>
            <SugestionCard
                title="Talvez você goste"
                subtitle="Angular 11"
                description="Framework para desenvolvimento de aplicações web"
                img = {bookImagem}
            
            ></SugestionCard>
        </LatestReleasesContainer>
    );
}

export default LatestReleases;