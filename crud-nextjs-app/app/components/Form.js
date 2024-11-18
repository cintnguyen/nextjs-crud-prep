function Form({ handleFormRes }) {
    const handleClick = () => {
        e.preventDefault()
        handleFormRes()
    }

    return (
        <form onSubmit={handleClick}>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                Submit
            </button>
        </form>

    )
}


export default Form