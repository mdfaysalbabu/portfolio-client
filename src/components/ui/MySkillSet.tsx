"use client";

import Skills from '../../data/data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AiFillHtml5 } from 'react-icons/ai';
import {  FaNodeJs, FaTools, FaGraduationCap } from 'react-icons/fa';

const MySkillSet = () => {
    const getIcon = (title:any) => {
        switch (title.toLowerCase()) {
            case 'frontend':
                return <AiFillHtml5 size={50} color="#F59E0B" />;
            case 'backend':
                return <FaNodeJs size={50} color="#8B5CF6" />;
            case 'tools':
                return <FaTools size={50} color="#10B981" />;
            case 'educational qualification':
                return <FaGraduationCap size={50} color="#3B82F6" />;
            default:
                return null;
        }
    };

    return (
        <section className="min-h-screen py-20 text-white">
            <div className="container mx-auto px-4">
                <h5 className="font-bold text-4xl mb-14 text-center animate-fade-in">Technical Proficiency</h5>
                <Tabs className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <TabList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                        {Skills?.map((item, index) => (
                            <Tab key={index} className="border-0 rounded-lg transition-all duration-300 transform hover:scale-110">
                                <button className="skills-card btn btn-outline relative btn-white h-[120px] w-[220px] text-white bg-gradient-to-r from-gray-700 via-purple-400 to-pink-400 shadow-lg hover:shadow-2xl">
                                    <div className="absolute -left-[20px] -top-[15px]">
                                        {getIcon(item.title)}
                                    </div>
                                    <p className="text-lg font-semibold">{item.title}</p>
                                </button>
                            </Tab>
                        ))}
                    </TabList>
                    <div className="lg:w-[59%] md:w-[45%] w-[100%]">
                        <TabPanel>
                            <div className="overflow-x-auto border-2 h-[300px] rounded-3xl p-5 bg-white text-black shadow-2xl">
                                <table className="table-auto w-full">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="p-4">HTML</td>
                                            <td className="p-4">CSS</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">Tailwind</td>
                                            <td className="p-4">Bootstrap</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">JavaScript</td>
                                            <td className="p-4">TypeScript</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">React</td>
                                            <td className="p-4">Next.js</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">Redux</td>
                                            <td className="p-4">DOM</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">Material-UI</td>
                                            <td className="p-4">Ant Design</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="overflow-x-auto border-2 h-[300px] rounded-3xl p-5 bg-white text-black shadow-2xl">
                                <table className="table-auto w-full">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="p-4">Node.js</td>
                                            <td className="p-4">Express.js</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">Prisma</td>
                                            <td className="p-4">PostgreSQL</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">MongoDB</td>
                                            <td className="p-4">Mongoose ODM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="overflow-x-auto border-2 h-[300px] rounded-3xl p-5 bg-white text-black shadow-2xl">
                                <table className="table-auto w-full">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="p-4">Figma</td>
                                            <td className="p-4">Git</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">VS Code</td>
                                            <td className="p-4">Vercel</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">Netlify</td>
                                            <td className="p-4">Render</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">cPanel</td>
                                            <td className="p-4">Postman</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="overflow-x-auto border-2 h-[300px] rounded-3xl p-5 bg-white text-black shadow-2xl">
                                <table className="table-auto w-full">
                                    <tbody>
                                        <tr className="border-b">
                                            <th className="p-4">Graduated</th>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">Haldia Institute of Technology, MAKAUT, West Bengal, India</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">B.Tech in Computer Science and Engineering</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4">CSE</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">2019 - 2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default MySkillSet;
