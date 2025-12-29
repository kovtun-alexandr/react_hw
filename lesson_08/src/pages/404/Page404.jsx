import GoHomeButton from "../../components/GoHomeButton/GoHomeButton";

function Page404() {
    return (
        <section>
            <div className="container">
                <section className="not-found">
                    <div className="not-found__inner">
                        <h1>Сторінка не знайдена</h1>
                    </div>
                    <GoHomeButton />
                </section>
            </div>
        </section>
    );
}

export default Page404;