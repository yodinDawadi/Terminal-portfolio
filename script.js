
class Portfolio {
    constructor(name, age, aim, education, institution, facebook, github, linkedin) {
        this.name = name;
        this.age = age;
        this.aim = aim;
        this.education = education;
        this.institution = institution;
        this.facebook = facebook;
        this.github = github;
        this.linkedin = linkedin;
    }

    displayInfo() {
        return `
<span class="code-keyword">const</span> <span class="variable">name</span> = <span class="value">"${this.name}"</span>;
<span class="code-keyword">const</span> <span class="variable">age</span> = <span class="value">${this.age}</span>;
<span class="code-keyword">const</span> <span class="variable">aim</span> = <span class="value">"${this.aim}"</span>;
<span class="code-keyword">const</span> <span class="variable">education</span> = <span class="value">"${this.education}"</span>;
<span class="code-keyword">const</span> <span class="variable">institution</span> = <span class="value">"${this.institution}"</span>;

<span class="comment">// Displaying Information</span>
<span class="console-keyword">console</span>.<span class="function-call">log</span>(<span class="value">"Welcome to Yodin Dawadi's Portfolio!"</span>);
<span class="console-keyword">console</span>.<span class="function-call">log</span>(<span class="value">"Name: "</span> + <span class="variable">name</span>);
<span class="console-keyword">console</span>.<span class="function-call">log</span>(<span class="value">"Age: "</span> + <span class="variable">age</span>);
<span class="console-keyword">console</span>.<span class="function-call">log</span>(<span class="value">"Aim: "</span> + <span class="variable">aim</span>);
<span class="console-keyword">console</span>.<span class="function-call">log</span>(<span class="value">"Education: "</span> + <span class="variable">education</span>);
<span class="console-keyword">console</span>.<span class="function-call">log</span>(<span class="value">"Institution: "</span> + <span class="variable">institution</span>);
        `;
    }

    displaySocialLinks() {
        return `
Connect with me:
<a href="${this.facebook}" target="_blank">Facebook</a>
<a href="${this.github}" target="_blank">GitHub</a>
<a href="${this.linkedin}" target="_blank">LinkedIn</a>
        `;
    }
}


const myPortfolio = new Portfolio(
    "Yodin Dawadi",
    18,
    "Full Stack Developer (MERN)",
    "BSC. CSIT",
    "Central Campus of Technology, Dharan",
    "https://www.facebook.com/profile.php?id=61556957793988",
    "https://github.com/yodinDawadi", 
    "https://www.linkedin.com/in/yodin-dawadi-18804a227/"
);

document.getElementById('terminal-content').innerHTML = myPortfolio.displayInfo();

document.getElementById('social-links').innerHTML = myPortfolio.displaySocialLinks();
