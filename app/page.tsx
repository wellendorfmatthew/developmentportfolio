'use client'

import Image from "next/image";
import Header from "@/components/header";
import Github from "../public/github.png";
import LinkedIn from "../public/linkedin.png";
import Programming from "../public/programming.png";
import Info from "../public/information-button.png";
import Skills from "../public/pencil.png";
import Projects from "../public/project-management.png";
import Contact from "../public/email.png";
import Javascript from "../public/js.png";
import React from "../public/atom.png";
import HTML_ICON from "../public/html-5.png";
import CSS_ICON from "../public/css-3.png";
import FIREBASE_ICON from "../public/icons8-firebase-64.png";
import SQL from "../public/sql-server.png";
import TYPESCRIPT_ICON from "../public/typescript.png";
import NODE_ICON from "../public/node-js.png";
import { CIcon } from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import LINK_ICON from "../public/external-link.png";

export default function Portfolio() {
  return (
    <div>
      <Header></Header>
      <div className="pt-44 flex flex-col gap-8">
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="home">
          <h1 className="font-bold text-4xl">Home</h1>
          <Image src={Programming} alt="Programming"></Image>
          <p 
              className="max-w-[500px] min-w-52"
          >
          I am a Front-End / Full-Stack Developer currently interning for Geaux Network and looking for a full time 
          developer position.
          </p>
          <div className="flex gap-8">
              <a href="https://github.com/wellendorfmatthew?tab=repositories" className="hover:bg-thistle hover:rounded-full duration-300">
                  <Image src={Github} alt="Github"></Image>
              </a>
              <a href="https://www.linkedin.com/in/matthew-wellendorf-7a9ba828a/" className="hover:bg-thistle hover:rounded-full duration-300">
                  <Image src={LinkedIn} alt="LinkedIn"></Image>
              </a>
          </div>
          <a 
              href="/softwareresume.pdf" 
              target="_blank" 
              className="bg-thistle text-lg px-8 py-4 rounded-full hover:font-bold hover:text-lg hover:shadow-xl duration-300"
          >
          Resume
          </a>
        </div>
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="about">
            <h1 className="font-bold text-4xl">About</h1>
            <Image src={Info} alt="Info"></Image>
            <p 
                className="max-w-[500px] min-w-52"
            >
            Entry-level Software Engineer experienced in using HTML and CSS to build responsive web applications and eager to use
            React, Javascript, Node.js and other technologies to solve complex problems and make meaningful contributions.
            </p>
        </div>
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="skills">
            <h1 className="font-bold text-4xl">Skills</h1>
            <Image src={Skills} alt="Skills"></Image>
            <div className="grid grid-cols-4 gap-8">
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={Javascript} alt="Javascript"></Image>
                    <p className="font-bold">Javascript</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={React} alt="React"></Image>
                    <p className="font-bold">React</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={HTML_ICON} alt="HTML"></Image>
                    <p className="font-bold">HTML</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={CSS_ICON} alt="CSS"></Image>
                    <p className="font-bold">CSS</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={FIREBASE_ICON} alt="Firebase"></Image>
                    <p className="font-bold">Firebase</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={Github} alt="Github"></Image>
                    <p className="font-bold">Github</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={SQL} alt="Sql"></Image>
                    <p className="font-bold">SQL</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <CIcon icon={icon.cibNextJs} className="w-[64px] h-[64px]" />
                    <p className="font-bold">Next.js</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={TYPESCRIPT_ICON} alt="Typescript"></Image>
                    <p className="font-bold">Typescript</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <Image src={NODE_ICON} alt="Node"></Image>
                    <p className="font-bold">Node.js</p>
                </div>
                <div className="flex justify-between items-center px-4 py-4 bg-thistle rounded-xl w-[250px] hover:opacity-80 duration-300">
                    <CIcon icon={icon.cibMongodb} className="w-[64px] h-[64px]" />
                    <p className="font-bold">MongoDB</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="projects">
            <h1 className="font-bold text-4xl">Projects</h1>
            <Image src={Projects} alt="Projects"></Image>
            <div className="flex flex-col items-center justify-center bg-thistle gap-8 rounded-3xl px-8 py-12 w-1/2">
                <h1 className="font-bold text-2xl">Ecommerce Website</h1>
                <p>A full stack ecommerce website where users can select clothing items and add them to a cart. The Stripe API is used
                    for payment processing and signed in users are able to access a profile page where they can view wishlist items, update
                    personal information, and view their order history. 
                </p>
                <div className="flex items-start justify-center gap-16">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <p className="font-bold">Technologies Used:</p>
                        <div className="grid grid-cols-3 gap-8">
                            <Image src={React} alt="React"></Image>
                            <Image src={Javascript} alt="Javascript"></Image>
                            <CIcon icon={icon.cibMongodb} className="w-[64px] h-[64px]" />
                            <Image src={HTML_ICON} alt="HTML"></Image>
                            <Image src={CSS_ICON} alt="CSS"></Image>
                            <Image src={NODE_ICON} alt="Node"></Image>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <p className="font-bold">Links:</p>
                        <div className="flex gap-8">
                            <a href="https://github.com/wellendorfmatthew/goth-ecommerce-website" className="hover:opacity-70 hover:rounded-full duration-300">
                                <Image src={Github} alt="Github"></Image>
                            </a>
                            <a href="https://goth-ecommerce-website.vercel.app/" className="hover:opacity-70 hover:rounded-full duration-300">
                                <Image src={LINK_ICON} alt="Link"></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-thistle gap-8 rounded-3xl px-8 py-12 w-1/2">
                <h1 className="font-bold text-2xl">Password Manager</h1>
                <p>A website that lets users create a randomly generated password using several filters. Users are also able to sign in and
                    add passwords for websites that they would like to store. There's also a feature that lets users check the strength and uniqueness 
                    of their passwords.
                </p>
                <div className="flex items-start justify-center gap-16">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <p className="font-bold">Technologies Used:</p>
                        <div className="grid grid-cols-3 gap-8">
                            <Image src={React} alt="React"></Image>
                            <Image src={Javascript} alt="Javascript"></Image>
                            <CIcon icon={icon.cibMongodb} className="w-[64px] h-[64px]" />
                            <Image src={HTML_ICON} alt="HTML"></Image>
                            <Image src={CSS_ICON} alt="CSS"></Image>
                            <Image src={NODE_ICON} alt="Node"></Image>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <p className="font-bold">Links:</p>
                        <div className="flex gap-8">
                            <a href="https://github.com/wellendorfmatthew/goth-ecommerce-website" className="hover:opacity-70 hover:rounded-full duration-300">
                                <Image src={Github} alt="Github"></Image>
                            </a>
                            <a href="https://goth-ecommerce-website.vercel.app/" className="hover:opacity-70 hover:rounded-full duration-300">
                                <Image src={LINK_ICON} alt="Link"></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-thistle gap-8 rounded-3xl px-8 py-12 w-1/2">
                <h1 className="font-bold text-2xl">Geaux Network</h1>
                <p>This is the website for my internship where I've made several contributions. I helped redesign the sign in, sign up, forgot password,
                    reset password, and profile pages. I implemented features such as language translation, otp authentication, profile information updating,
                    UI menus, and helped fix bugs when needed. 
                </p>
                <div className="flex items-start justify-center gap-16">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <p className="font-bold">Technologies Used:</p>
                        <div className="grid grid-cols-3 gap-8">
                            <Image src={React} alt="React"></Image>
                            <Image src={Javascript} alt="Javascript"></Image>
                            <CIcon icon={icon.cibMongodb} className="w-[64px] h-[64px]" />
                            <Image src={HTML_ICON} alt="HTML"></Image>
                            <Image src={CSS_ICON} alt="CSS"></Image>
                            <Image src={NODE_ICON} alt="Node"></Image>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <p className="font-bold">Links:</p>
                        <div className="flex gap-8">
                            <a href="https://github.com/wellendorfmatthew/goth-ecommerce-website" className="hover:opacity-70 hover:rounded-full duration-300">
                                <Image src={Github} alt="Github"></Image>
                            </a>
                            <a href="https://goth-ecommerce-website.vercel.app/" className="hover:opacity-70 hover:rounded-full duration-300">
                                <Image src={LINK_ICON} alt="Link"></Image>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-screen justify-center items-center gap-8 text-black pt-[150px]" id="contact">
            <h1 className="font-bold text-4xl">Contact</h1>
            <Image src={Contact} alt="Contact"></Image>
            <p 
                className="max-w-[500px] min-w-52"
            >
            Entry-level Software Engineer experienced in using HTML and CSS to build responsive web applications and eager to use
            React, Javascript, Node.js and other technologies to solve complex problems and make meaningful contributions.
            </p>
        </div>
      </div>
    </div>
  );
}
