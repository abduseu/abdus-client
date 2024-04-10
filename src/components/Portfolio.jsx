const Portfolio = () => {
    return (
        <div className="mx-5 mt-6">
            <div className="mx-auto py-8 md:py-20 space-y-6 md:space-y-12">
                <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    My Portfolio
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <a href="https://foodrocket-97ffc.web.app" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-10 h-full">
                            <h3>FoodRocket - Online Food Delivery Platform</h3>
                        </div>
                    </a>
                    <a href="https://swissrealty-b5ce9.web.app" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-10 h-full">
                            <h3>Swiss Realty - Real Estate Management Platform</h3>
                        </div>
                    </a>
                    <a href="https://studypeer-44518.web.app" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-10 h-full">
                            <h3>Studypeer - Peer based assignment marking system</h3>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;