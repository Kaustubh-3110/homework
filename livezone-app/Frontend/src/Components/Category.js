export default function Category() {
    return (
        <>
            <div className="flex flex-col items-center my-8">
                <h2 className="text-3xl font-bold text-center my-8">Categories</h2>
                <div className="flex  justify-center items-center gap-6">
                    <div className="flex flex-col items-center">
                        <img className="h-[50px] rounded-lg hover:scale-110 cursor-pointer " src="https://p0.piqsels.com/preview/568/27/766/black-gaming-computer-mouse.jpg" alt="Mouse" />
                        <p className="text-semibold hover:cursor-pointer">Mouse</p>
                    </div>
                    <div>
                        <img className="h-[50px] rounded-lg hover:scale-110 cursor-pointer " src="https://images.unsplash.com/photo-1631449061775-c79df03a44f6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D" alt="Keyboard" />
                        <p className="text-semibold hover:cursor-pointer" >Keyboard</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="h-[50px] rounded-lg hover:scale-110 cursor-pointer " src="https://img.freepik.com/premium-photo/wireless-controller-gamepad-isolated-black-background-3d-rendering-illustration_97167-452.jpg" alt="controller" />
                        <p className="text-semibold hover:cursor-pointer">Controller</p>

                    </div>
                    <div className="flex flex-col items-center">
                        <img className="h-[50px] rounded-lg hover:scale-110 cursor-pointer " src="https://shop.zebronics.com/cdn/shop/files/Zeb-Havoc-pic1.jpg?v=1717221774&width=1200" alt="Headset" />
                        <p className="text-semibold hover:cursor-pointer">Headset</p>
                    </div>
                    <div className="flex flex-col items-center">

                        <img className="h-[50px] rounded-lg hover:scale-110 cursor-pointer " src="https://assets3.razerzone.com/V_aB28Hka7m4pXw-269wxeUW4Lo=/767x511/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh99%2Fh9c%2F9826525446174%2F241009-enki-x-1500x1000-3.jpg" alt="Chair" />
                        <p className="text-semibold hover:cursor-pointer">Chair</p>
                    </div>
                </div>

            </div >
        </>

    )
}