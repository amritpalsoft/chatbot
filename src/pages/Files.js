import React, { useEffect, useState } from "react";
import NavContent from "../components/NavContent";
import './Files.css'
const Files = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [files, setFiles] = useState([]);
    const [visibleFiles, setVisibleFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            // const response = await fetch(`https://api.example.com/files`);
            setTimeout(() => {
                setLoading(false)
                const data = [{ id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn mn wjwbfhej wnfe jfenfjenfefenf efe fjefefe fhenfjef efe fefehfb ehfbehfbefhb efhebfhebfe' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }, { id: 1, name: 'anjsn' }];
                setFiles(data);
                setVisibleFiles(data)
            }, 2000);

            // setVisibleFiles(data.slice(0, pageSize)); // Initial files to show
        } catch (error) {
            console.error("Error fetching files:", error);
        } finally {
            // setLoading(false);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && hasMore && !loading) {
    //             setLoading(true);
    //             setTimeout(() => {
    //                 // Load more files when scrolled to the bottom
    //                 setVisibleFiles((prevVisibleFiles) => {
    //                     const nextIndex = prevVisibleFiles.length + pageSize;
    //                     return files.slice(0, nextIndex);
    //                 });
    //                 setLoading(false);
    //             }, 1000); // Simulate a loading delay
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [files, pageSize, hasMore, loading]);

    const renderTable = () => (
        <table>
            <thead>
                <tr>
                    <th className="serial-no">Serial No</th>
                    <th className="id">ID</th>
                    <th className="name">Name</th>
                </tr>
            </thead>
            <tbody>
                {visibleFiles.length === 0 && !loading ? (
                    <tr>
                        <td colSpan="3" className="no-data">No data available</td>
                    </tr>
                ) : (
                    visibleFiles.map((file, index) => (
                        <tr key={file.id}>
                            <td className="serial-no">{index + 1}</td>
                            <td className="id">{file.id}</td>
                            <td className="name">{file.name}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );

    return (
        <>
            <header>
                <div className="menu">
                    <button onClick={() => setShowMenu(true)}>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="#d9d9e3"
                            strokeLinecap="round"
                        >
                            <path d="M21 18H3M21 12H3M21 6H3" />
                        </svg>
                    </button>
                </div>
                <h1>TalkBot</h1>
            </header>
            {showMenu && (
                <nav>
                    <div className="navItems">
                        <NavContent
                            chatLog={files}
                            setChatLog={setFiles}
                            setShowMenu={setShowMenu}
                        />
                    </div>
                    <div className="navCloseIcon">
                        <svg
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            xmlSpace="preserve"
                            stroke="#fff"
                            width={42}
                            height={42}
                            onClick={() => setShowMenu(false)}
                        >
                            <path d="m53.691 50.609 13.467-13.467a2 2 0 1 0-2.828-2.828L50.863 47.781 37.398 34.314a2 2 0 1 0-2.828 2.828l13.465 13.467-14.293 14.293a2 2 0 1 0 2.828 2.828l14.293-14.293L65.156 67.73c.391.391.902.586 1.414.586s1.023-.195 1.414-.586a2 2 0 0 0 0-2.828L53.691 50.609z" />
                        </svg>
                    </div>
                </nav>
            )}
            <aside className="sideMenu">
                <NavContent
                    chatLog={files}
                    setChatLog={setFiles}
                    setShowMenu={setShowMenu}
                />
            </aside>
            <main>
                <h2 className="heading">Uploaded Files</h2> {/* Center-aligned heading */}
                {renderTable()}
                {loading && <div className="loader">Loading files...</div>}
            </main>
        </>
    );
};

export default Files;
