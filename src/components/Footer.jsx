const Footer = () => {
    return (
        <footer>
            <div className="row bg-primary p-4">
            <div class="col-md-4 text-light ">
                <h4 class="text-dark ">About Us</h4>
                <p>We are the Sparkler Digitals limited located in Ruiru opposite Quickmart supermaket. We are open from Monday to Friday at 8.00AM to 6.00PM. We treat our customers with dignity and offer our best products as we can.</p>
            </div>
            <div class="col-md-4 text-center text-light">
                <h4 class="text-center text-dark">Stay Connected</h4>
                <p>For more information dial;</p>
                <b class="text-light">0723456432</b><br />

                <a href="https://www.facebook.com">
                    <img src="Images/fb.png" alt="Facebook"/>
                </a>
                <a href="https://www.instagram.com">
                    <img src="{logo}" alt="Instagram"/>
                </a>
                <a href="https://www.twitter.com">
                    <img src="Images/x.png" alt="X"/>
                </a>
            </div>
            </div>
    </footer>

    
    )
}

export default Footer