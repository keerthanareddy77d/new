import React from "react";
import {Typography,Grid,Link,Card} from "@material-ui/core";
import log from './assests/log.jpg'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call'
import MailIcon from '@material-ui/icons/Mail'
const Footer = () => <>
<div >
                <Card style={{flex:1,backgroundImage: 'url('+log+')'}}>
                
                    <center>
                    <Typography variant="h4" style={{color:"whitesmoke",alignContent:"center"}}>Contact us on</Typography>
<br/>
                    <WhatsAppIcon color="success" />
                    <Typography paragraph>
                        <Link href="https://web.whatsapp.com/" >+917288982069</Link>.
                    </Typography>
                
                    <CallIcon color="success" />
                    <Typography paragraph>
                        <Link href="callto:7288982069">+919440507517</Link>
                    </Typography>

                    <MailIcon color="success" />
                    <Typography paragraph>
                        <Link href="mailto:sthiraproperties@gmail.com">sthiraproperties@gmail</Link>
                    </Typography>
                    </center>
               
                </Card>
        </div>
    </>

export default Footer;