function CustomerCard(props){
    return <>
    <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src={props.src} alt="..." />
            <h5>{props.customerName}</h5>
            <p className="font-weight-light mb-0">{props.customerFeedback}</p>
        </div>
    </div>
    </>
}

export default CustomerCard