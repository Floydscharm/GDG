import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="setup-container">
      <h2>Setup & Configuration</h2>
      
      <section class="api-keys">
        <h3>API Keys</h3>
        <div class="key-management">
          <div class="key-display" *ngIf="apiKey">
            <label>Your API Key:</label>
            <div class="key-value">
              <input [type]="showKey ? 'text' : 'password'" [value]="apiKey" readonly>
              <button (click)="toggleKeyVisibility()">
                {{ showKey ? 'Hide' : 'Show' }}
              </button>
              <button (click)="copyToClipboard(apiKey)">Copy</button>
            </div>
          </div>
          <button class="generate-btn" (click)="generateNewKey()">Generate New API Key</button>
        </div>
      </section>

      <section class="integration-guide">
        <h3>Integration Guide</h3>
        <div class="code-snippets">
          <div class="snippet">
            <h4>JavaScript</h4>
            <pre><code>{{javascriptSnippet}}</code></pre>
            <button (click)="copyToClipboard(javascriptSnippet)">Copy Code</button>
          </div>
          
          <div class="snippet">
            <h4>Python</h4>
            <pre><code>{{pythonSnippet}}</code></pre>
            <button (click)="copyToClipboard(pythonSnippet)">Copy Code</button>
          </div>

          <div class="snippet">
            <h4>cURL</h4>
            <pre><code>{{curlSnippet}}</code></pre>
            <button (click)="copyToClipboard(curlSnippet)">Copy Code</button>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .setup-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      color: #2c3e50;
      margin-bottom: 2rem;
    }

    section {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h3 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #eee;
    }

    .key-management {
      margin-bottom: 1.5rem;
    }

    .key-display {
      margin-bottom: 1rem;
    }

    .key-value {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    .key-value input {
      flex: 1;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-family: monospace;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      background: #764ba2;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: #663d99;
    }

    .generate-btn {
      width: 100%;
      padding: 0.8rem;
      margin-top: 1rem;
    }

    .code-snippets {
      display: grid;
      gap: 1.5rem;
    }

    .snippet {
      background: #f8f9fa;
      border-radius: 6px;
      padding: 1rem;
    }

    .snippet h4 {
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    pre {
      background: #2c3e50;
      color: #fff;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
      margin-bottom: 1rem;
    }

    code {
      font-family: 'Monaco', 'Consolas', monospace;
      font-size: 0.9rem;
    }
  `]
})
export class SetupComponent {
  apiKey: string = '';
  showKey: boolean = false;
  
  javascriptSnippet = `const api = new AdminAPI({
  apiKey: 'your-api-key',
  endpoint: 'https://api.example.com'
});

// Make API requests
const response = await api.getData();`;

  pythonSnippet = `import admin_sdk

client = admin_sdk.Client(
    api_key='your-api-key',
    endpoint='https://api.example.com'
)

# Make API requests
response = client.get_data()`;

  curlSnippet = `curl -X GET 'https://api.example.com/data' \\
  -H 'Authorization: Bearer your-api-key' \\
  -H 'Content-Type: application/json'`;

  generateNewKey(): void {
    // In a real application, this would make an API call to generate a new key
    this.apiKey = 'sk_' + Math.random().toString(36).substr(2, 32);
  }

  toggleKeyVisibility(): void {
    this.showKey = !this.showKey;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text)
      .then(() => {
        // You might want to show a toast notification here
        console.log('Copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  }
}