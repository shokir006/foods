import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { notification } from 'antd';

const Blog = () => {

    const [blog, setBlog] = useState([]);
    const [title, setTitle] = useState('');
    const [descript, setDescript] = useState('');
    const [img, setImg] = useState('');
    const [show, setShow] = useState(true);
    const [id, setId] = useState('');



    let data = collection(db, 'blogs')
    useEffect(() => {
        // const getData = async () => {
        //     const dataBase = await getDocs(collection(db, 'blogs'));
        //     const itemsList = dataBase.docs.map(doc => ({
        //         ...doc.data(), id: doc.id,
        //     }));
        //     setBlog(itemsList);
        // }
        // getData();

        onSnapshot(
            data, (snapshot) => {
                let malumot = [];
                snapshot.docs.forEach((doc) => {
                    malumot.push({ ...doc.data(), id: doc.id })
                });
                setBlog(malumot);
            }
        )
    }, []);

    const database = collection(db, 'blogs');


    const handleCreate = async (e) => {


        if (title == "" || descript == "" || img == "") {
            return notification.error({
                message: "Input bo'sh",
                description: "Iltimos malumotlarni to'lliq kiriting"
            });
        } else {
            e.preventDefault();
            await addDoc(database, {
                title: title,
                descript: descript,
                img: img,
                id: uuidv4()
            });

            notification.success({
                message: "Malumot yuborildi",
                description: "siz kiritgan malumot yuborild"
            });

            setDescript("");
            setTitle("");
            setImg("")
        }


    };

    console.log(blog);

    const handleDelete = async (id) => {
        const deletePost = doc(db, 'blogs', id);
        await deleteDoc(deletePost);
        console.log(id);
    };

    const handleEdit = async (id, title, descript, img) => {
        setId(id);
        setTitle(title);
        setDescript(descript);
        setImg(img);
        setShow(false)
    }
    const handleUpdate = async () => {
        const updateData = doc(db, 'blogs', id);
        await updateDoc(updateData, { title, descript, img });
    }

    return (
        <div>
            <h2>Blogs</h2>

            <div>
                <label>
                    <span>Title</span>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='border border-black mx-2' />
                </label>
                <label>
                    <span>Description</span>
                    <input value={descript} onChange={(e) => setDescript(e.target.value)} type="text" className='border border-black mx-2' />
                </label>
                <label>
                    <span>Img</span>
                    <input value={img} onChange={(e) => setImg(e.target.value)} type="text" className='border border-black mx-2' />
                </label>
            </div>

            {show ? <button className='border px-4 py-2 mt-2 bg-blue-600' onClick={handleCreate}>Create</button> : <button className='border px-4 py-2 mt-2 bg-blue-600' onClick={handleUpdate}>Update</button>}



            <section className="text-gray-600 body-font flex">
                {
                    blog.map((data) => {
                        return (
                            <>
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 ">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.img} alt="img" />
                                                <div className="p-6">
                                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.title}</h2>
                                                    <p className="leading-relaxed mb-3">{data.descript}</p>
                                                </div>

                                                {/* <button className='border px-4 py-2 mt-2 bg-blue-600 text-white' onClick={() => handleEdit(data.id, data.title, data.descript, data.img)}>Update</button>


                                                <button className='border px-4 py-2 mt-2 bg-red-600 text-white' onClick={() => handleDelete(data.id)}>Delete</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>

        </div>
    )
}

export default Blog