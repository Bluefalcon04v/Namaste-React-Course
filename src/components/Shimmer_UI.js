const Shimmer_UI = () => {
    return (
        <>
            <div className="resturantList">
                {Array(20).fill('')
                    .map((e, index) => (
                        <div className="shimmerCard" key={index}>
                            <div className="shimmerImage"></div>
                            <div className="shimmerParaContainer">
                                <p className="shimmerPara"></p>
                                <p className="shimmerPara"></p>
                            </div>
                        </div>))
                }
            </div>
        </>
    )
}

export default Shimmer_UI;