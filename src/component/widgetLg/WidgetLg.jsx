import "./WidgetLg.css"

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className= {"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTittle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1630349239323-8fd2f2479276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Viet Hai</span>
                    </td>
                    <td className="WidgetLgDate">31 Aug 2021</td>
                    <td className="WidgetLgAmount">$999.99</td>
                    <td className="WidgetLgStatus">
                        <Button type="Approved" />
                    </td>

                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1630349239323-8fd2f2479276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Viet Hai</span>
                    </td>
                    <td className="WidgetLgDate">31 Aug 2021</td>
                    <td className="WidgetLgAmount">$999.99</td>
                    <td className="WidgetLgStatus">
                        <Button type="Declined" />
                    </td>

                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1630349239323-8fd2f2479276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Viet Hai</span>
                    </td>
                    <td className="WidgetLgDate">31 Aug 2021</td>
                    <td className="WidgetLgAmount">$999.99</td>
                    <td className="WidgetLgStatus">
                        <Button type="Pending" />
                    </td>

                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1630349239323-8fd2f2479276?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                            alt=""
                            className="widgetLgImg" />
                        <span className="widgetLgName">Viet Hai</span>
                    </td>
                    <td className="WidgetLgDate">31 Aug 2021</td>
                    <td className="WidgetLgAmount">$999.99</td>
                    <td className="WidgetLgStatus">
                        <Button type="Approved" />
                    </td>

                </tr>




            </table>
        </div>
    )
}