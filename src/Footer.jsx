function ListFooter(props){
    return <>
        <li className="list-inline-item"><a href="#!">{props.name}</a></li>
        <li className="list-inline-item">⋅</li>
    </>
}


function Footer(){
    let footlist = ["About","Contact","Terms of Use","Privacy Policy"];
    return <>
    <footer className="footer bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                    <ul className="list-inline mb-2">
                        {
                            footlist.map((it,key)=>(
                                <ListFooter key={key} name={it} />
                            ))
                        }
                    </ul>
                    <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                </div>
                <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item me-4">
                            <a href="#!"><i className="bi-facebook fs-3"></i></a>
                        </li>
                        <li className="list-inline-item me-4">
                            <a href="#!"><i className="bi-twitter fs-3"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!"><i className="bi-instagram fs-3"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
}

export default Footer