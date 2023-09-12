Shimmer=()=>{
    return(
        <div className="cards">
      {Array(15).fill("").map((e,index) => {
        return (
          <div className="card" key={"shimmer_card"+index}>
            <div className="shimmer_img" key={"shimmer_img"+index}></div>
            <div className="shimmer_h3" key={"shimmer_h3"+index}></div>
            <div className="shimmer_p" key={"shimmer_p1"+index}></div>
            <div className="shimmer_p" key={"shimmer_p2"+index}></div>
          </div>
        );
      })}
    </div>
    )
}
export default Shimmer