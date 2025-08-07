export default function Whishlistpage({likedProducts}) {
    return (
        <>
            <div className="h-[90vh] ">
              {likedProducts.map(item =>(
                <p>{item.name}</p>
              ))}  
            </div>
        </>
    );
}