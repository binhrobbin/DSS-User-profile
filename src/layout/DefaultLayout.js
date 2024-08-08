import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const DefaultLayout = () => {
    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div style={{ marginLeft: "200px" }}>
                <Header/>
            </div>
            <div>
                 <Sidebar/>
            </div>
        </div>
    );
};

export default DefaultLayout;