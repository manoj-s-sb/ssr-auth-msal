const MyComponent = () => {
    const isClient = typeof window !== 'undefined';
    console.log(isClient);
    
    return (
        <div className="bg-gray-200 h-[500px] flex items-center justify-center">
            {isClient ? (
                <p className="text-black">This component is running in the browser (client-side).</p>
            ) : (
                <p className="text-black"> This component is running on the server (server-side).</p>
            )}
        </div>
    );
};

export default MyComponent;



