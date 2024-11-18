export default function AmazonPrice({newPrice, oldPrice, idx}){
    let oldStyle = {
             textDecorationLine: "line-through"
    };

    let newStyle = {
            fontWeight : "bold"
    };

    let styles = {
         
        backgroundColor: "#e0c337",
        height: "80px",
        width: "220px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px"

    }
    return (
        <div style={styles}>
               <span style={oldStyle}>{oldPrice[idx]}</span> &nbsp; &nbsp;
               <span style={newStyle}>{newPrice[idx]}</span>
        </div>
    )

}