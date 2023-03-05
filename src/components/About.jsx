import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>PROFESSIONAL SUMMARY:</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        &#8226; Over 5+ years of professional experience in Cross-Platform (Web
        &amp; Client-Server) application development and design using AWS and
        Node.JS, React JS technologies. <br/>
        &#8226; Experience working in
        environments using Agile (SCRUM) and Test-Driven development (TDD)
        methodologies. <br/>
        &#8226;Expertise in working and managing various AWS
        cloud resources EC2, S3, Glacier, EBS, Route 53, VPC, VPN, ELB, EMR,
        RDS, Elastic beanstalk, Cloud Watch, Auto Scaling, ACL, SNS, SES, SQS
        and IAM.<br/>
        &#8226;Experience in using NodeJS with Express framework and middleware for authentication.<br/>
        &#8226;Experienced in database systems like PostgreSQL and NoSQL database (DynamoDB).<br/>
        &#8226;Solid understanding of React JS Virtual Dom Algorithm, for React JS performance optimization.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
