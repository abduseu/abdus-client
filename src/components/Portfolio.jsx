const Portfolio = () => {
    return (
        <div className="mx-5">
            <div className="mx-auto py-8 md:py-20 space-y-6 md:space-y-12">
                <h1 className="text-2xl md:text-4xl font-semibold text-center">
                    My Portfolio
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <a href="https://grassroot-restaurant.web.app" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-8 h-full space-y-2">
                            <img src="https://i.ibb.co/VVrjP1P/grassroot.png" className="h-48 mx-auto object-contain" />
                            <h3>Grassroot - Restaurant Management System</h3>
                        </div>
                    </a>
                    <a href="https://swissrealty-b5ce9.web.app" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-8 h-full space-y-2">
                            <img src="https://i.ibb.co/VWs0FD7/swissrealty.png" className="h-48 mx-auto object-contain" />
                            <h3>Swiss Realty - Real Estate Management Platform</h3>
                        </div>
                    </a>
                    <a href="https://studypeer-44518.web.app" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-8 h-full space-y-2">
                            <img src="https://i.ibb.co/HNCBHwx/studypeer.png" className="h-48 mx-auto object-contain" />
                            <h3>Studypeer - Peer based assignment marking system</h3>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;