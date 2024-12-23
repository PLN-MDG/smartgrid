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
            <p>Distribution Network Modernization includes distribution system automation using the Internet of Things (IoT), artificial intelligence technology with wired or wireless communication protocols to carry out monitoring, tracking, communication, control and management of intelligent distribution system operations through a SCADA (Supervisory Control and Data) system. Acquisition). Master Station SCADA capabilities and capabilities are strengthened and distribution network equipment is updated with IoT-enabled technology. Modernization of the distribution network is not only carried out in the primary distribution system (medium voltage - TM) but also carried out in distribution transformers and secondary distribution systems (low voltage - TR).</p>
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
            <p>The use of SCADA in setting up the TM 20 kV primary distribution system has been started by PLN since 1986 at UID Jaya. To support the modernization of the integrated distribution network, it is necessary to build a main control center equipped with a monitoring system, Advanced Metering Infrastructure (AMI), Distribution Management System (DMS) and Outage Management System (OMS), which will form an Advanced Distribution Management System (ADMS), Distributed Energy. Resources Management System (DERMS), Geographic Information System (GIS), Energy Management System (EMS), Asset Management (AM), Demand Response Management, and other supporting systems. The entire system is managed centrally.</p>
            <div className='page-img-container'>
              <img className='page-img' src='scada-2.png'/>
            </div>
            <div className="section">
                <h4>Distribution Automation System Field Test in Jakarta MV Network</h4>
                <p>The implementation of SCADA in PLN's Jakarta MV network and enhancing real-time monitoring and control. The SCADA system enables improved fault detection, isolation, and restoration, significantly reducing the average recovery time for medium voltage disturbances and increasing overall network reliability. The system's success in minimizing outages and ensuring efficient network management is a critical advancement for PLN's operational capabilities.</p>
            </div>
            <div className="section">
                <h4>Semi-Distributed Automatic Scheme for Self-Healing Implementation</h4>
                <p>The implementation of a semi-distributed automatic scheme for self-healing in Jakarta's distribution system. The scheme uses SCADA to detect, isolate, and restore faults, significantly reducing the System Average Interruption Duration Index (SAIDI) and improving reliability.</p>
            </div>
            <div className="section">
                <h4>Outage Management in PLN </h4>
                <p>This document highlights the transformation of PLN’s outage management system through digitalization. The adoption of SCADA allows for real-time monitoring and control of outages across power plants, transmission, and distribution systems. Information is processed by the Outage Information Center, which dispatches field crews and notifies customers about outages, their causes, and recovery progress. This system has significantly reduced response and restoration times, improved staff productivity, and increased customer satisfaction.</p>
            </div>
            <h3>DMS/ADMS</h3>
            <p>PLN is still in the process of developing the Distribution Management System (DMS) across all units. Some features of DMS are already partially implemented in some units, particularly Network Topology, Distribution Power Flow (DPF), Short Circuit Analysis (SSC), Fault Location, Isolation, and Service Restoration (FLISR), and Protection Validation. These features are currently managed independently by each unit. Therefore, PLN is conducting a study to formulate a roadmap for DMS development with the aim of eventually centralizing its management.</p>
            <div className="section">
                <p>The Outage Management System (OMS), known as the Integrated Complaint and Complaint Application (APKT), has been implemented by PLN since 2012. APKT was developed internally by PLN and at that time was not integrated with SCADA. APKT functions include:</p>
                <ul>
                    <li>Managing various customer complaints, which are then assigned to respective personnel within PLN.</li>
                    <li>Monitoring response and recovery times for disruptions, making APKT highly beneficial for continuous improvement.</li>
                </ul>
                <p>Subsequently, the Virtual Command Center (VCC) application was developed in 2019, integrating with APKT and the SCADA system of each unit in 2019. VCC functions include:</p>
                <ul>
                    <li>Monitoring the mobilization of field personnel (Yantek).</li>
                    <li>Monitoring the performance of field personnel (Yantek).</li>
                </ul>
                <p>In general, the 2 things above are the basis for continuous improvement, both in terms of infrastructure related to CSOs and improvements in terms of the quality of Yantek's human resources/officers. The national CSO to SCADA Integration Program will then start in 2022, by creating an integrator application, namely the national SCADA Portal. This integration, which is carried out nationally, aims to ensure uniformity and standardization of CSO integration across all PLN units. The National SCADA Portal has the following functions and features:</p>
                <ul>
                  <li>Have an application that is capable of providing data in real time and with integrity for the needs of Data Lake SCADA and Distribution System Operations</li>
                  <li>Centralized Distribution System Operation and Maintenance Information Dashboard</li>
                  <li>Centralized Maintenance Center and Network Operation Dashboard</li>
                  <li>Monitoring the Management of Blackout and On Events, both Planned and Disturbance per Substation, to be forwarded to APKT and PLN Mobile</li>
                  <li>Digitalization of Corporate Applications integrated with SCADA Systems according to ESB platform standardization according to IEC 61968 for Big Data Distribution Operations</li>
                  <li>Present infographics related to electricity maps in all distribution units throughout Indonesia</li>
                  <li>Presents data recaps and trending graphs of real-time data measurements from SCADA</li>
                  <li>Recap of Operation and Maintenance Data for SCADA Systems, Telecommunication Systems, Protection Systems, Distribution System Operations and 20kV Installation Management</li>
                  <li>Management of user authority or access rights and roles according to authority</li>
                  <li>Recap historical SCADA event data and operations for up to 5 years</li>
                  <li>Can be integrated with other corporate applications such as transmission, distribution, customer service and K3 applications.</li>
                  <li>Standardization of the integration platform between the Offline SCADA Server and the National Portal including architecture and topology.</li>
                  <li>Automate critical event notifications to related parties according to basic communication.</li>
                  <li>Source of Operational Performance and SCADA data for Implementing Units.</li>
                  <li>Centrally backup SCADA distribution historical event data</li>
                </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default AMC;