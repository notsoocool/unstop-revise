'use client';
import { Collapse } from "@nextui-org/react";
import { spawn } from "child_process";
import { heading, ITGM } from "@/data/careerData";

export default function Content() {

	return (
		<div className=" w-screen max-w-[1600px] h-auto bg-[#F6F8FA] flex flex-col overflow-x-hidden">
			<div className="z-10 w-screen max-w-[1600px] h-[750px] xl:h-[395px] absolute bg-[#123158] "></div>
			<div className=" w-screen max-w-[1180px] h-auto flex justify-center">
				<div className="z-50 w-screen lg:w-[800px] h-auto">
					<div className="text-white px-5 lg:px-0 h-auto md:h-[395px] flex flex-col gap-5 md:gap-0 justify-between">	
						<div className=" hidden lg:block"><a href="">Courses</a> &nbsp;{">"}&nbsp; <a href="">Growth Marketing</a></div>
						<span className="text-white font-[700] text-[38px]">Growth Marketing</span>
						<div className="flex flex-col lg:flex-row gap-4">
							<div className=" w-[150px] h-[40px] rounded-2xl bg-[#173C6A] flex items-center">
								<span>Live Cohorts</span>
							</div>
							<div className=" flex gap-4">
								<img className="h-[40px]" src="https://cdn.unstop.com/uploads/images/unstop/course/course_avatar.png?d=192x80" alt="" />
								<div className="h-[40px] flex flex-col justify-center ">
									<span className=" text-[#ffba00] font-[800] text-[17px] ">~50,324+</span>
									<span className="">enrolled learners are on their way to building an unstoppable career</span>
								</div>
							</div>
						</div>
						<div className="flex">
							<img className="h-[178px] w-[178px]" src="https://d8it4huxumps7.cloudfront.net/uploads/images/instructors/logo/250x250/6488937d63cfa_amitkumar_banka.png?d=356x370" alt="" />
							<div className=" pl-3 mb-3 flex flex-col justify-end">
								<span className=" text-[#ffba00] text-[16px] font-[500]">Amitkumar Banka</span>
								<p className=" text-[12px]">
									Growth Marketing at Swiggy | Ex Head- Growth Marketing Flipkart
									<br /><br />
									Amit Kumar Banka is a seasoned marketing professional with over a decade of experience in digital marketing, brand management, and customer acqui... <a className=" text-[#ffba00]" href="">More</a>
								</p>
							</div>
						</div>
					</div>
					<div className="block xl:hidden px-5 py-5 w-full h-auto bg-white rounded-2xl">
						<div className=" flex flex-col gap-5">
							<div className=" flex flex-col gap-5 border-b">
								<div className=" flex justify-between items-center gap-5">
									<div className="text-[16px]  flex flex-col">
										<span>Program cost:</span>
										<span>($50,000)48% OFF</span>
									</div>
									<span className="  text-[30px]">
										$25,997/-
									</span>
								</div>
								<button className="font-[500] text-white w-full h-[50px] bg-[#f8963d] rounded-lg">
									<a href=" ">Enroll Now</a>
								</button>
								<span className="font-[500] text-[#0073e6] ml-auto mr-auto text-[15px]">I am Interested</span>
							</div>
							<div className="gap-3 font-[400]  flex flex-col justify-evenly">
								<span>Learn from Industry Leaders</span>
								<span>Industry aligned Projects</span>
								<span>Featured listing of Resume</span>
								<span>Certification</span>
								<span>Personalised Career Coaching</span>
							</div>
						</div>
					</div>
					
					{/* About the Course */}
					<div className=" my-4 w-screen lg:w-[800px] py-5 md:py-0 h-auto md:h-[237px] rounded-md flex justify-center bg-white">
						<div className=" px-5 lg:px-0 lg:w-[760px] flex gap-5 md:gap-0 flex-col justify-evenly">
							<h2>About the Course</h2>
							<p className="  font-[500]">The growth marketing course we offer is a comprehensive learning experience that empowers participants to create impactful growth marketing charters and strategies for typical consumer tech or direct-to-consumer (D2C) companies. With a focus on driving growth and maximizing ROI, this course equips learners with the necessary skills to navigate the competitive landscape and achieve significant results. A highlight of this course is the ability to acquire the first 10 million users for a B2C platform. Learners will dive into effective user acquisition strategies, exploring viral loops, referral programs, influencer marketing, and other innovative techniques.</p>
						</div>
					</div>
					
					{/* Key Takeways */}
					<div className=" my-4 w-screen lg:w-[800px] h-auto md:h-[313px] rounded-md flex justify-center bg-white">
						<div className=" py-5 md:py-0 px-5 lg:px-0 w-screen lg:w-[760px] flex flex-col gap-5 md:gap-0 justify-evenly">
							<h2>Key Takeways</h2>
							<div className="  flex gap-5 md:gap-0 flex-col md:flex-row">
								<div className=" md:w-1/2  flex flex-col gap-5">
									<div className=" flex items-center gap-3">
										<div className=" h-[50px] w-[50px] border rounded-lg flex justify-center items-center">
											<img className="h-[22px] w-[22px]" src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/highlight_11.svg" alt="" />
										</div>
										<h3 className="w-[290px] ">2.5 Months of Crash Course to Placements</h3>
									</div>
									<div className=" w-screen flex items-center gap-3">
										<div className=" h-[50px] w-[50px] border rounded-lg flex justify-center items-center">
											<img className="  h-[22px] w-[22px]" src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/highlight_19.svg" alt="" />
										</div>
										<h3 className=" w-[290px] ">Acquiring 10M users, reducing CAC by 40%, and charting strategy for a consumer tech/D2C company</h3>
									</div>
									<div className=" flex items-center gap-3">
										<div className=" h-[50px] w-[50px] border rounded-lg flex justify-center items-center">
											<img className="h-[22px] w-[22px]" src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/highlight_14.svg" alt="" />
										</div>
										<h3 className="w-[290px] ">Placement Prep- Resume, GD, LinkedIn, Portfolio Prep and Mock Interviews</h3>
									</div>
								</div>
								<div className=" md:w-1/2 flex flex-col gap-5">
									<div className=" flex items-center gap-3">
										<div className=" h-[50px] w-[50px] border rounded-lg flex justify-center items-center">
											<img className="h-[22px] w-[22px]" src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/highlight_14.svg" alt="" />
										</div>
										<h3 className="w-[290px] ">Live Classes from 50+ Industry Leaders of Top Brands- Google, Microsoft and Swiggy</h3>
									</div>
									<div className=" flex items-center gap-3">
										<div className=" h-[50px] w-[50px] border rounded-lg flex justify-center items-center">
											<img className="h-[22px] w-[22px]" src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/highlight_3.svg" alt="" />
										</div>
										<h3 className="w-[290px] ">Gain insights from diverse industry case studies</h3>
									</div>
									<div className=" flex items-center gap-3">
										<div className=" h-[50px] w-[50px] border rounded-lg flex justify-center items-center">
											<img className="h-[22px] w-[22px]" src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/highlight_2.svg" alt="" />
										</div>
										<h3 className="w-[290px] ">Certification, Letter of Recommendation and Job Referrals</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Career Growth */}
					<div className=" py-5 md:py-0 px-5 md:px-0 my-4 w-screen lg:w-[800px] h-auto md:h-[230px] rounded-md flex justify-center bg-white">
						<div className=" w-screen lg:w-[760px] flex flex-col gap-5 md:gap-0 justify-evenly">
							<h2>Career Growth Prospects After The Completion of This Course</h2>
							<div className="flex flex-col md:flex-row  px-5 lg:px-0 gap-3 lg:gap-0 justify-between">
								<div className=" pb-5 md:pb-0 w-full lg:w-[246px] md:h-[150px] flex flex-col justify-top rounded-xl border border-l-4 border-b-4 border-[#E67519]">
									<strong className=" mx-5 pt-3 text-[#E67519]">INR 20 LPA</strong>	
									<p className="mx-5  text-[15px]">Average Salary of Growth Manager in India</p>
								</div>
								<div className="pb-5 md:pb-0 w-full lg:w-[246px] md:h-[150px] flex flex-col justify-top rounded-xl border border-l-4 border-b-4 border-[#E9407A]">
									<strong className=" mx-5 pt-3 text-[#E9407A]">2,00,000+</strong>	
									<p className="mx-5  text-[15px]">Job openings for growth manager professionals on popular job portals in India</p>
								</div>
								<div className="pb-5 md:pb-0 w-full lg:w-[246px] md:h-[150px] flex flex-col justify-top rounded-xl border border-l-4 border-b-4 border-[#6548EE]">
									<strong className=" mx-5 pt-3 text-[#6548EE]">1,10,00,000+</strong>	
									<p className="mx-5  text-[15px]">Expected job openings in the next 5 years</p>
								</div>
							</div>
						</div>
					</div>

					{/* Course Content */}
					<div className=" my-4 w-screen lg:w-[800px] h-auto flex flex-col rounded-md bg-white">
						<div className=" px-[20px] h-[93px] flex flex-col justify-center border-b">
							<h2>Career Growth Prospects After The Completion of This Course</h2>
							<span className="">10 Sections</span>
						</div>
						<Collapse.Group>
							{heading.map((prod) => (
								<Collapse expanded={prod.exp} title={
									<span className="font-[500] text-[16px]">{prod.name}</span>
								} contentLeft={
									<div className="h-[30px] w-[30px] flex justify-center items-center rounded-full border border-[#1c4980]">{prod.id}</div>
								}>
									{ITGM.map(item => (
										<li className="hover:bg-[#e5f1fc] h-[60px] font-[500] flex justify-between items-center transition-all duration-[400ms]">
											<div className="flex gap-3">
												<img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63ff366840432_play_icon.svg" alt="" />
												{item}
											</div>
											<img src="https://d8it4huxumps7.cloudfront.net/uploads/images/64463d7fed7ab_lock.svg" alt="" />
										</li>
									))}
								</Collapse>
							))}	
						</Collapse.Group>
					</div>
				</div>
				<div className=" hidden xl:block z-50 w-[auto] pl-3">
					{/* Cost Card */}
					<div className="mt-5 fixed shadow-lg w-[370px] h-[540px] rounded-2xl bg-white flex justify-center">
						<div className="w-[350px] flex flex-col">
							<div className="h-[66%] flex flex-col justify-evenly items-center border-b">
								<img className="" src="https://d8it4huxumps7.cloudfront.net/uploads/images/courses/2304/banners/648738d5cd869_1101x435__1_.jpg" alt="" />
								<div className=" flex justify-center items-center gap-5">
									<div className="text-[16px]  flex flex-col">
										<span>Program cost:</span>
										<span>($50,000)48% OFF</span>
									</div>
									<span className="  text-[30px]">
										$25,997/-
									</span>
								</div>
								<button className="font-[500] text-white w-[310px] h-[50px] bg-[#f8963d] rounded-lg">
									<a href=" ">Enroll Now</a>
								</button>
								<span className="font-[500] text-[#0073e6] text-[15px]">I am Interested</span>
							</div>
							<div className="h-[33%] font-[400]  flex flex-col justify-evenly">
								<span>Learn from Industry Leaders</span>
								<span>Industry aligned Projects</span>
								<span>Featured listing of Resume</span>
								<span>Certification</span>
								<span>Personalised Career Coaching</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="my-10 w-full md:h-[418px] flex justify-center">
				<div className="pl-8 w-screen max-w-[1180px] flex flex-col-reverse md:flex-row gap-10 justify-start items-center">
					<img className=" border-[#DCE7F2] border-[20px]" src="/cert.png" alt="" />
					<div className="flex flex-col">
						<h2 className=" text-[30px]">Certification of Completion</h2>
						<p className="text-[20px] xl:w-[550px]">
							Upgrade your skills and stay current with the industry by completing these professional courses, which also provide certification upon completion.
						</p>
					</div>
				</div>
			</div>
			
		</div>
	)
}
