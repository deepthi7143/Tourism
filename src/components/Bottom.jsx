import React from 'react'



export default function Bottom() {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', height: '50vh' }}>
            <p style={{ margin: '50px' }}>" The website was good and it shows info about all travels which have available seats instead of showing only a particular travels company. Continue the good work. "</p>
            <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'black', color: 'wheat' }}>
                <table>
                    <tr>
                        <td>Terms And Conditions</td>
                    </tr>
                    <tr>
                        <td>FAQ</td>
                    </tr>
                    <tr>
                        <td>Travel</td>
                    </tr>
                    <tr>
                        <td>Blog</td>
                    </tr>
                </table>


                <table>
                    <tr>
                        <td>About Us</td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                    </tr>
                    <tr>
                        <td>Help</td>
                    </tr>
                    <tr>
                        <td>Support</td>
                    </tr>

                </table>


                <table>
                    <tr>
                        <td>Polices</td>
                    </tr>
                    <tr>
                        <td>Privacy Policy</td>
                    </tr>
                    <tr>
                        <td>Legal data</td>
                    </tr>
                    <tr>
                        <td>Frequently Asked Questions</td>
                    </tr>

                </table>



                <table>
                    <tr>
                        <td>Partner With Us</td>
                    </tr>
                    <tr>
                        <td>Become An Agent</td>
                    </tr>
                    <tr>
                        <td>Add Your Product</td>
                    </tr>
                    <tr>
                        <td>Investors Welcome</td>
                    </tr>

                </table>
            </div>
            <marquee behavior="alternate" direction="right"><h1 style={{ marginTop: '30px' }}>Have A Happy Trip !</h1></marquee>
            <div><p style={{ float: 'right'}}>Phone: 8106567161</p><br /></div>
        </div>
    )
}
