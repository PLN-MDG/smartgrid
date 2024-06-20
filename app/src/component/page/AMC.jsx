import React, { useEffect, useRef } from 'react';
import '../../style/page.css'

const AMC = () => {

  return (
    <>
        <div className='page-container'>
          <img className="page-banner" src='home.gif'/>
          <div className='page-content'>
            <h1>Automated Monitoring and Control</h1>
            <h3>SCADA</h3>
            <p>Energy Transition is one of the programs supporting the Climate Change agenda in Indonesia. The energy transition necessitates the massive penetration of power generation from new and renewable energy sources into the electricity distribution network. </p>
            <div className='info-container'>
              <div className='info-item-container'>
                <h3>2060</h3>
                <h6>Zero Emission Target</h6>
              </div>
            </div>
            <p>The intermittent, variable, and dispersed nature of these renewable energy power plants will significantly negatively impact the operation, reliability, quality, efficiency, and flexibility of electricity supply in the distribution network. These negative impacts will eventually affect customers who use electricity for productive and economic activities. To mitigate these negative impacts, the distribution network must transform from a passive and conventional role in contingency management to active, modern, flexible, and smart distribution system management. The distribution regulatory entity must also transform from an entity that only regulates the distribution network (distribution network operator) to an entity that manages the entire distribution system in a centralized and integrated manner (distribution system operator).</p>
            <div className='page-img-container'>
              <img className='page-img' src='scada-1.png'/>
            </div>
            <p>The modernization of the distribution network includes the automation of the distribution system using the Internet of Things (IoT), artificial intelligence technology, and communication protocols, either wired or wireless, to perform monitoring, tracking, communication, control, and intelligent distribution system operations management through the SCADA (Supervisory Control and Data Acquisition) system. The capabilities and functionalities of the SCADA Master Station are enhanced, and distribution network equipment is upgraded with technology that supports IoT. The modernization of the distribution network is carried out not only on the primary distribution system (medium voltage - MV) but also on distribution transformers and the secondary distribution system (low voltage - LV). </p>
            <div className='info-container'>
              <div className='info-item-container'>
                <h3>22</h3>
                <h6>UID/UIW</h6>
              </div>
              <div className='info-item-container'>
                <h3>50</h3>
                <h6>Main Distribution Center</h6>
              </div>
              <div className='info-item-container'>
                <h3>19</h3>
                <h6>SCADA System</h6>
              </div>
              <div className='info-item-container'>
                <h3>5</h3>
                <h6>Disaster Recovery Center</h6>
              </div>
            </div>
            <p>The utilization of SCADA in managing the primary 20 kV MV distribution system has been initiated by PLN since 1986 in UID Jaya. To support integrated distribution network modernization, the construction of main control centers equipped with Advanced Metering Infrastructure (AMI) monitoring systems, Distribution Management Systems (DMS), and Outage Management Systems (OMS) is required. These systems will form an Advanced Distribution Management System (ADMS), Distributed Energy Resources Management System (DERMS), Geographic Information System (GIS), Energy Management System (EMS), Asset Management (AM), Demand Response Management, and other supporting systems. All these systems will be managed centrally..</p>
            <div className='page-img-container'>
              <img className='page-img' src='scada-2.png'/>
            </div>
            <h3>DMS/ADMS</h3>
            <p>PLN is still in the process of developing the Distribution Management System (DMS) across all units. Some features of DMS are already partially implemented in some units, particularly Network Topology, Distribution Power Flow (DPF), Short Circuit Analysis (SSC), Fault Location, Isolation, and Service Restoration (FLISR), and Protection Validation. These features are currently managed independently by each unit. Therefore, PLN is conducting a study to formulate a roadmap for DMS development with the aim of eventually centralizing its management.</p>
            <div className="section">
                <h4>Outage Management System (OMS)</h4>
                <p>The Outage Management System (OMS), known as the Integrated Complaint and Complaint Application (APKT), has been implemented by PLN since 2012 (to be confirmed). APKT was developed internally by PLN and at that time was not integrated with SCADA. APKT functions include:</p>
                <ul>
                    <li>Managing various customer complaints, which are then assigned to respective personnel within PLN.</li>
                    <li>Monitoring response and recovery times for disruptions, making APKT highly beneficial for continuous improvement.</li>
                </ul>
                <p>Subsequently, the Virtual Command Center (VCC) application was developed in 2019, integrating with APKT and the SCADA system of each unit (to be confirmed). VCC functions include:</p>
                <ul>
                    <li>Monitoring the mobilization of field personnel (Yantek).</li>
                    <li>Monitoring the performance of field personnel (Yantek).</li>
                </ul>
                <p>Overall, these aspects form the basis for continuous improvement, both in terms of OMS-related infrastructure and in enhancing the quality of human resources (Yantek personnel).</p>
            </div>
            <div className="section">
                <h4>National Integration Program</h4>
                <p>The national integration program of OMS with SCADA began in 2022, resulting in the creation of a national SCADA Portal application. The national integration aims to achieve uniformity and standardization of OMS integration across all PLN units. The National SCADA Portal includes the following functions and features:</p>
                <ul>
                    <li>Real-time and data-integrity-capable application for SCADA Data Lake and Distribution System Operations needs.</li>
                    <li>Centralized Operations and Maintenance System Information Dashboard for Distribution Systems.</li>
                    <li>Centralized Dashboard for Maintenance Centers and Network Operations.</li>
                    <li>Monitoring of Planned and Fault-related Outage Events per Substation for forwarding to APKT and PLN Mobile.</li>
                    <li>Corporate Application Digitalization integrated with SCADA System using ESB platform standardization per IEC 61968 for Distribution Operations Big Data.</li>
                    <li>Presentation of electrical grid maps across all distribution units in Indonesia via infographics.</li>
                    <li>Presentation of summary data and trend graphs of real-time SCADA measurement data.</li>
                    <li>Summary of SCADA System Operation and Maintenance Data, Telecommunication Systems, Protection Systems, Distribution System Operations, and 20kV Installation Management.</li>
                    <li>Management of user authority, access rights, and roles according to authorization.</li>
                    <li>Summary of Historical SCADA Event and Operation Data up to 5 years.</li>
                    <li>Integration capability with other Corporate Applications such as Transmission, Distribution, Customer Service, and HSE Applications.</li>
                    <li>Standardization of integration platform between Offline SCADA Servers and National Portal including architecture and topology.</li>
                    <li>Automation of critical event notifications to relevant parties based on communication basics.</li>
                    <li>Source data for Operational Performance and SCADA Implementation Unit.</li>
                </ul>
            </div>
          </div>

        </div>
    </>
  );
};

export default AMC;