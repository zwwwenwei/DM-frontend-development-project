import '../App.css';
import Header from '../Header'
import CardList from '../Card_folder/CardList'
import CustomerCardList from '../Card_folder/Customer_cardlist'
//import Navbar from './Navbar_folder/Navbar'
import Sendemail from '../Sendemail/Sendemail'
import Footer from '../Footer'
import devImage from '../image/devImage.jpg'

function HomePage() {
    return (
        <div>
            
            <br></br>
            <img src={devImage} className="image1" alt="" />
            <br></br>
            <div className='header-div'>
                <Header
                    text="Featured Freelancers"
                />
            </div>
            <br></br>
            <CardList
            //searchStaff={searchTerm}
            />
            <div className='header-div2'>
                <Header
                    text2="Featured Customers"
                />
            </div>
            <CustomerCardList />
            <br></br>
            <Sendemail
                signup="SIGN UP FOR OUR DAILY INSIDER" />
            <br></br>
            <Footer
                head1="For Dev"
                head2="For Clients"
                head3="Stay connected"
                head4="DEVLink"
                p1="How it works"
                p2="How to create a profile"
                p3="Find jobs"
                p4="How it works"
                p5="How to post a job"
                p6="Find dev"
                p7="Privacy Policy"
                p8="Terms"
                p9="Code of Conduct"
            />

            
        </div>
    );
}

export default HomePage;