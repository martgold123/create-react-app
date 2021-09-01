
import "./home.css"
import FeaturedInfo from "../../component/featureInfo/FeaturedInfo";
import Chart from "../../component/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../component/widgetSm/WidgetSm";
import WidgetLg from "../../component/widgetLg/WidgetLg";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} tittle="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}