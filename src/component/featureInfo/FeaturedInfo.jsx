import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function featuredInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTittle">Ravenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$9,999</span>
                    <span className="featuredMoneyRate">
                    -15,02 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to the last month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTittle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,345</span>
                    <span className="featuredMoneyRate">
                    -1.2 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to the last month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTittle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$6,845</span>
                    <span className="featuredMoneyRate">
                    +9.2 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared to the last month
                </span>
            </div>

        </div>
    );

}