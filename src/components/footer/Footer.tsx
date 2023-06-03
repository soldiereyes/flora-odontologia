import './Footer.css';

const Footer = () => {
    const creatorName = 'SoldierEyes'

    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Flora Odontologia. Todos os direitos reservados. Criado por {creatorName}</p>
            </div>
        </footer>
    );
};

export default Footer;
