export default function Navbarcomponent() {
    const username = 'kaustubh'
    return (
        <>
            <div className='flex items-center justify-between px-3 py-3 border bg-rose-300 border-neutral-900'>

                <img className='h-[50PX]' src='https://cdn-icons-png.freepik.com/256/15158/15158927.png' alt="" />
                <p className="font-semibold text-neutral-50">Make Your To-dos With Us....</p>
                <p className="font-semibold text-neutral-50">Welcome!! {username}</p>

            </div>

        </>
    )



}