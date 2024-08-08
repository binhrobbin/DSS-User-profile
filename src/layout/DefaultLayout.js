import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import "../assets/css/Layout.css"

const DefaultLayout = () => {
    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className={"header"}>
                <Header/>
            </div>
            <div>
                 <Sidebar/>
            </div>
        </div>
    );
};

export default DefaultLayout;