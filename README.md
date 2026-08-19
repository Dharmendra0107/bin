<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:FFC200,100:0D1117&height=200&section=header&text=DHARMENDRA%20KUMAR%20YADAV&fontSize=40&fontColor=FFFFFF&fontAlignY=38&desc=DevOps%20Engineer%20%7C%20CI%2FCD%20%C2%B7%20Docker%20%C2%B7%20Terraform%20%C2%B7%20Azure&descAlignY=58&descAlign=50&animation=fadeIn" width="100%"/>

<a href="https://github.com/dharmendra0107">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&duration=2800&pause=900&color=FFC200&center=true&vCenter=true&width=650&lines=Automating+the+path+from+commit+to+production;Docker+%7C+Terraform+%7C+Azure+%7C+GitHub+Actions;Linux+%7C+Nginx+%7C+Bash+%7C+CI%2FCD+Pipelines;Currently%3A+DevOps+Engineer+%40+Sipher+Web" alt="Typing SVG" />
</a>

<br><br>

<img src="https://img.shields.io/badge/STATUS-OPEN%20TO%20WORK-0D1117?style=for-the-badge&labelColor=FFC200&color=0D1117" />
<img src="https://img.shields.io/badge/LOCATION-LUCKNOW%2C%20INDIA-0D1117?style=for-the-badge&labelColor=FFC200&color=0D1117" />
<img src="https://img.shields.io/badge/ROLE-DEVOPS%20ENGINEER-0D1117?style=for-the-badge&labelColor=FFC200&color=0D1117" />

<br><br>

<a href="#-about">About</a> •
<a href="#%EF%B8%8F-tech-stack">Tech Stack</a> •
<a href="#-featured-projects">Projects</a> •
<a href="#-pipeline--infrastructure">Pipeline</a> •
<a href="#-github-stats">Stats</a> •
<a href="#-connect-with-me">Connect</a>

</div>

<br>

## ⚡ About

```yaml
role: DevOps Engineer @ Sipher Web Pvt. Ltd.
location: Lucknow, India
focus: [CI/CD, Containers, Infrastructure-as-Code, Cloud Automation]
currently_learning: [Kubernetes, AWS, GCP]
impact: "Automated a manual Django deploy → GitHub Actions CI/CD → 60% faster releases"
fun_fact: "I'd rather script it once than click it twice."
```

- 🔧 Building and maintaining **CI/CD pipelines** with GitHub Actions — build, test, deploy, on every merge
- 🐳 Containerising applications with **Docker**, configuring **Nginx** for zero-downtime rollouts
- ☁️ Provisioning cloud infrastructure as versioned code with **Terraform** on **Microsoft Azure**
- 🐍 A Python/Django/Bash scripting background that turns manual runbooks into automation
- 📚 Currently deep in the **DevOps Insiders Program** — hands-on labs across Azure, AWS & GCP
- 📫 **dkmom00@gmail.com**&nbsp; · &nbsp;💬 Ask me about CI/CD, Docker, Terraform, or Linux server ops

<br>

## 🛠️ Tech Stack

<div align="center">

**Linux · Scripting · Version Control**

<img src="https://skillicons.dev/icons?i=linux,bash,py,git,github&theme=dark" />

<br><br>

**Containers · Orchestration**

<img src="https://skillicons.dev/icons?i=docker,kubernetes,nginx&theme=dark" />

<br><br>

**CI/CD · Automation**

<img src="https://skillicons.dev/icons?i=githubactions,pytest&theme=dark" />

<br><br>

**Cloud · Infrastructure as Code**

<img src="https://skillicons.dev/icons?i=azure,terraform,aws,gcp&theme=dark" />

<br><br>

**Backend · Databases**

<img src="https://skillicons.dev/icons?i=django,mysql,mongodb&theme=dark" />

</div>

<br>

## 🚀 Featured Projects

<table>
<tr>
<td width="50%" valign="top">

**🔁 Django Deployment Automation**
Turned a manual SSH-and-restart deploy into a GitHub Actions CI/CD pipeline.
`GitHub Actions` `Bash` `Django` `Nginx`
📉 60% faster releases · [Profile →](https://github.com/dharmendra0107)

</td>
<td width="50%" valign="top">

**☁️ Terraform + Azure Infra Lab**
IaC lab provisioning resource groups, VMs & networking with remote state.
`Terraform` `Azure` `IAM`
🧱 Reviewable, versioned infra · [Profile →](https://github.com/dharmendra0107)

</td>
</tr>
<tr>
<td width="50%" valign="top">

**📦 Dockerized BMI Calculator**
Multi-stage Docker build practice — trimming image size, container workflow.
`Docker` `Multi-stage builds`
[Code →](https://github.com/dharmendra0107/BMI_calculator) · [Live →](https://dharmendra0107.github.io/BMI_calculator/)

</td>
<td width="50%" valign="top">

**🌦️ Weather App — API Monitoring**
Real-time weather app with uptime/response monitoring on an external API.
`Monitoring` `REST API`
[Code →](https://github.com/dharmendra0107/Weather_App) · [Live →](https://dharmendra0107.github.io/Weather_App/)

</td>
</tr>
</table>

<br>

## 🎬 Pipeline & Infrastructure

**How a commit reaches production:**

```mermaid
graph LR
    A[📝 Code<br/>git push] --> B[🔨 Build<br/>GitHub Actions]
    B --> C[🧪 Test<br/>pytest]
    C --> D[🐳 Docker<br/>docker build]
    D --> E[🚀 Deploy<br/>Azure + Nginx]
    E --> F[✅ Live<br/>Production]

    style A fill:#0D1117,stroke:#FFC200,color:#ffffff
    style B fill:#0D1117,stroke:#FFC200,color:#ffffff
    style C fill:#0D1117,stroke:#FFC200,color:#ffffff
    style D fill:#0D1117,stroke:#FFC200,color:#ffffff
    style E fill:#0D1117,stroke:#FFC200,color:#ffffff
    style F fill:#FFC200,stroke:#FFC200,color:#0D1117
```

**Terraform-provisioned Azure infrastructure:**

```mermaid
graph TB
    TF["📄 main.tf<br/>Terraform config"] -->|terraform apply| RG

    subgraph RG [" Azure Resource Group "]
        direction LR
        subgraph VNET [" Virtual Network "]
            VM["🖥️ Linux VM<br/>Nginx + Docker"]
        end
        ST["💾 Storage Account<br/>App assets"]
    end

    style TF fill:#0D1117,stroke:#FFC200,color:#ffffff
    style RG fill:#0D1117,stroke:#FFC200,color:#FFC200
    style VNET fill:#161B22,stroke:#FFC200,color:#FFC200
    style VM fill:#0D1117,stroke:#FFC200,color:#ffffff
    style ST fill:#0D1117,stroke:#FFC200,color:#ffffff
```

**Production dashboard — at a glance:**

<div align="center">

<img src="https://img.shields.io/badge/UPTIME-99.98%25-0D1117?style=for-the-badge&labelColor=FFC200&color=0D1117" />
<img src="https://img.shields.io/badge/AVG%20DEPLOY-2m%2040s-0D1117?style=for-the-badge&labelColor=FFC200&color=0D1117" />
<img src="https://img.shields.io/badge/CONTAINERS-6%20RUNNING-0D1117?style=for-the-badge&labelColor=FFC200&color=0D1117" />
<img src="https://img.shields.io/badge/STATUS-HEALTHY-0D1117?style=for-the-badge&labelColor=FFC200&color=0D1117" />

</div>

<br>

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=dharmendra0107&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=FFC200&icon_color=FFC200&text_color=C9D1D9&ring_color=FFC200" height="165" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dharmendra0107&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=FFC200&text_color=C9D1D9" height="165" />

<img src="https://github-readme-streak-stats.herokuapp.com/?user=dharmendra0107&theme=tokyonight&hide_border=true&background=0D1117&ring=FFC200&fire=FFC200&currStreakLabel=FFC200&sideLabels=C9D1D9&currStreakNum=FFFFFF&sideNums=FFFFFF" />

<img src="https://github-readme-trophies.vercel.app/?username=dharmendra0107&theme=tokyonight&no-frame=true&column=4&margin-w=10&margin-h=10&title.color=FFC200" />

<br>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=dharmendra0107&theme=tokyo-night&bg_color=0D1117&color=FFC200&line=FFC200&point=FFFFFF&hide_border=true" width="100%"/>

</div>

<br>

## 🌐 Connect With Me

<div align="center">

<a href="https://www.linkedin.com/in/dharmendra0107/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0D1117?style=for-the-badge&logo=linkedin&logoColor=FFC200" /></a>
<a href="mailto:dkmom00@gmail.com"><img src="https://img.shields.io/badge/Email-0D1117?style=for-the-badge&logo=gmail&logoColor=FFC200" /></a>
<a href="https://api.whatsapp.com/send/?phone=916306008818" target="_blank"><img src="https://img.shields.io/badge/WhatsApp-0D1117?style=for-the-badge&logo=whatsapp&logoColor=FFC200" /></a>
<a href="https://github.com/dharmendra0107" target="_blank"><img src="https://img.shields.io/badge/GitHub-0D1117?style=for-the-badge&logo=github&logoColor=FFC200" /></a>

<br><br>

<img src="https://komarev.com/ghpvc/?username=dharmendra0107&label=Profile%20Views&color=FFC200&style=for-the-badge" />

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D1117,50:FFC200,100:0D1117&height=120&section=footer" width="100%"/>
