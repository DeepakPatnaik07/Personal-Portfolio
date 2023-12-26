import React from "react";

const skills = [

  {
    title: "Metasploit",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184090558520643607/metasploit.png?ex=658ab544&is=65784044&hm=2019819b68f31cc3a4c2efdca26957926bf89a2a9b256df43326386af7f33db7&",
  },
  {
    title: "Python",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184176190307709060/python_logo.png?ex=658b0504&is=65789004&hm=c431ee64428cdea061181bd32c705adc4e9f1317f003bbebac2bead5054f4b22&",
  },
  {
    title: "NMap",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184177600969572542/Nmap_log.png?ex=658b0655&is=65789155&hm=296c5154f594ffb304004604e51d7fdc0857af9a219a5fe1c5f48459e9de93d6&",
  },
  {
    title: "C",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184178087181688843/C_language.png?ex=658b06c8&is=657891c8&hm=b528a5c2de1f476eaec6f13ed842f67c228d4f58eda844f9d8ffdc836d94a70b&",
  },
  {
    title: "C++",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184178475159015518/C.png?ex=658b0725&is=65789225&hm=293512d906abf37782f9e5cee83e546133dd0b596c95fa6e796c3c93ed580310&",
  },
  {
    title: "Hping3",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184178798900547734/Hping3.png?ex=658b0772&is=65789272&hm=389ce59e3853dbaacc598aecac62f9513ecc01aabb28b0171f2e6f3309de5d74&",
  },
  {
    title: "Kali-Linux",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184179376850468936/download.png?ex=658b07fc&is=657892fc&hm=55ba1f0ab580d3b16cde620aa7374862af4b433b4a79e865aeed2945bc609a56&",
  },
  {
    title: "Parrot OS",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184180046882152528/Parrot_OS.jpg?ex=658b089c&is=6578939c&hm=ddd259ba90bdb031a08af6d84048722a62ce8d61ede6d93c8a491744ced3444d&",
  },
  {
    title: "Wireshark",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184180335446081648/wireshark.jpg?ex=658b08e0&is=657893e0&hm=ca56931883881edc57ac91ca4bf59594e48a216070f7b69f512dddc5cb918478&",
  },
  {
    title: "Nikto",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184180623804481606/nikto.jpg?ex=658b0925&is=65789425&hm=3094ce670b7f188b7ed3b6315bc3a9a239bf570acc863c1895ffa096ea00bac1&",
  },
  {
    title: "Burp Suite",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184180875508854917/burp_suite.jpg?ex=658b0961&is=65789461&hm=fe82d980fc2997f525a50fe54617169add33d01bd227675c1d2d6a7bc56b6feb&",
  },
  {
    title: "OWASP",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184181604332081152/OWASP.jpg?ex=658b0a0f&is=6578950f&hm=e14eb77378884e75e7b7ebb92754a4d80a01f78855d09e7958edcdead1808a01&",
  },
  {
    title: "Github",
    url: "https://cdn.discordapp.com/attachments/811266748753903686/1184181997229314160/Github.png?ex=658b0a6d&is=6578956d&hm=c065aa0a1776a2ccc4fe360afdac039baa82c9b63739fe838398bb51480d43b5&",
  },
];

function Skills() {
  return (
    <div className="bg-gray-200 dark:bg-[#1E2226]">
      <div className="py-4 mx-auto max-w-7xl">
        <p className="font-gilroy-extrabold font-semibold text-7xl text-black dark:text-[rgb(255,117,102)] text-center">
          SKILLS
        </p>
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="rounded-full bg-gray-700 dark:bg-gray-300">
                <img src={skill.url} alt={skill.title} className="h-24 w-24 rounded-full p-2" />
              </div>
              <p className="text-black dark:text-[rgb(255,117,102)] text-xl font-gilroy-bold mt-5">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
