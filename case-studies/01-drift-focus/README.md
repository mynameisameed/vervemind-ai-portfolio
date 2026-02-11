# Case Study #1: Drift-Focus (Automated YouTube Channel)

> #### **Project: "Drift-Focus" — A Fully Automated Generative AI YouTube Content Pipeline**
>
> **Objective:** To create a "lights-out" system that could autonomously **generate**, produce, and publish unique, themed video content for a YouTube channel, eliminating all manual effort.
>
> ---
>
> #### **The Problem**
>
> Running a themed YouTube channel requires a significant amount of repetitive work. The challenge is not just automating uploads, but generating a *constant stream of unique content* to keep the channel active and engaging without requiring hours of creative work for each video.
>
> #### **The Solution**
>
> I designed and built a complete, end-to-end generative content pipeline using a combination of **n8n, Python, FFmpeg, and multiple AI models**.
>
> The automated workflow is as follows:
>
> 1.  **Webhook Trigger:** The entire process is initiated by a single webhook call.
> 2.  **Generative Asset Creation (AI):** The n8n workflow orchestrates the creation of new, unique assets for each video:
>     *   **Audio:** A new, original ambient audio track is created using an external AI audio generation service.
>     *   **Video:** A seamless, looping visual is generated using **Google's Veo 3** model, tailored to the channel's aesthetic.
> 3.  **Video Production (Python & FFmpeg):** n8n passes the generated assets to a Python script that uses FFmpeg to programmatically combine them and render the final `video.mp4` file.
> 4.  **Metadata Generation (AI):** The workflow uses another AI model to generate a unique, SEO-optimized title and description based on the generated content.
> 5.  **YouTube Upload & Publish:** The final video and its metadata are automatically uploaded and published to the YouTube channel via API.
>
> #### **The Result**
>
> This system transformed the entire content creation process into a single, autonomous workflow.
>
> *   **Generative AI at the Core:** Leverages multiple cutting-edge AI models (Veo 3 for video, external AI for audio, and another for text) to create truly unique content for every upload.
> *   **100% Automation:** The pipeline runs end-to-end with zero human intervention after the initial trigger.
> *   **Infinitely Scalable Content:** The channel can produce an endless stream of original content, ensuring consistent uploads without creative burnout or repetitive manual tasks.
>
> **Technologies Used:**
> `n8n` | `Python` | `FFmpeg` | `Google Veo 3` | `AI Audio Generation` | `YouTube Data API`

---

[View the Pipeline Diagram](./diagram.html)
