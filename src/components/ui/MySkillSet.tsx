"use client"
import SkillCard from '@/components/ui/SkillCard';
import Skills from '../../data/data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';
const MySkillSet = () => {
    return (
        <section className="h-[100%]">
            <h5 className='font-bold text-2xl mb-14'>Technical Proficiency</h5>
            <div className="">
                <Tabs className="flex md:flex-row flex-col md:justify-between items-center gap-10">
                    <TabList className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10">
                        {
                            Skills?.map((item, index) => (
                                <Tab key={index} className='border-0 rounded-lg' selectedClassName='active'>
                                    <button className={`skills-card btn btn-outline relative btn-primary h-[100px] w-[200px] text-white`}>
                                        <div className="absolute -left-[20px] -top-[15px]">
                                            <Image className="bg-[#7c5fe6] p-2 rounded-lg border border-gray-400" src={item.icon} width={50} height={50} alt={item.title} />
                                        </div>
                                        <p className='text-white'>{item.title}</p>
                                    </button>
                                </Tab>
                            ))
                        }
                    </TabList>
                    <div className="lg:w-[59%] w-[100%] ">
                        <TabPanel >
                            <div className="overflow-x-auto border-2 h-[280px] rounded-3xl p-5">
                                <table className="table table-zebra">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>

                                            <td>HTML</td>
                                            <td>CSS</td>
                                            <td>Tailwind</td>
                                            <td>Bootstrap</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>JavaScript</td>
                                            <td>TypeScript</td>
                                            <td>React</td>
                                            <td>Next js</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>

                                            <td>Redux</td>
                                            <td>DOM</td>
                                            <td>MUI</td>
                                            <td>Ant Design</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel  >
                        <div className="overflow-x-auto border-2 h-[280px] rounded-3xl p-5">
                                <table className="table table-zebra">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>

                                            <td>Node Js </td>
                                            <td>Express Js</td>
                                           
                                      
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                        <td>Prisma</td>
                                            <td>PostgreSql</td>
                                                                                               
                                        </tr>
                                        <tr>
                                        <td>Mongodb</td>
                                        <td>Mongoose ODM</td>
                                        </tr>
                                      
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className="overflow-x-auto border-2 h-[280px] rounded-3xl p-5">
                                <table className="table table-zebra">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>

                                            <td>Figma</td>
                                            <td>Git</td>
                                           
                                      
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                        <td>Vs code</td>
                                        <td>Vercel</td>
                                                                                               
                                        </tr>
                                        <tr>
                                        <td>Netlify</td>
                                        <td>Render</td>
                                        </tr>
                                        <tr>
                                        <td>C Panel</td>
                                        <td>Postman</td>
                                        </tr>
                                      
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 4</h2>
                        </TabPanel>
                    </div>
                </Tabs>
                <div className="skills-info"></div>
            </div>
        </section>
    );
};

export default MySkillSet;