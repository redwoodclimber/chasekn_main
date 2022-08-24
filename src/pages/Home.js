import UserForm from "./UserForm";

const Home = () => {
    return (
            <div className="flex flex-col items-center">
                <h1 className="text-4xl text-center">Chase Knowland</h1>
                <div className="p-3">
                    <UserForm />
                </div>
                
            </div>
    );
};

export default Home;