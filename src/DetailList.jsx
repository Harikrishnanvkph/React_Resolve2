import DetailCard from "./DetailCard"

let detailCards = [
    ["Fully Responsive","This theme will look great on any device, no matter the size!"],
    ["Bootstrap 5 Ready","Featuring the latest build of the new Bootstrap 5 framework!"],
    ["Easy to Use","Ready to use with your own content, or customize the source files!"]
]

function DetailList(){
    
    return <>
    {/* <!-- Icons Grid--> */}
    <section className="features-icons bg-light text-center">
        <div className="container">
            <div className="row">
                {
                    /* Dynamically creating DetailCard component */
                    detailCards.map((it,key)=>(
                        <DetailCard key={key} h3={it[0]} p={it[1]} />
                    ))
                }
            </div>
        </div>
    </section>
    </>
}

export default DetailList