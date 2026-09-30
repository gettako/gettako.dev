"use client";

export function HeroTerminal() {
  return (
    <div className="w-full rounded-lg border border-[var(--border)] bg-[#0b0c14] overflow-hidden text-left font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-[#939db81a] bg-[#141622] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e85347]/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/80 inline-block" />
          <span className="ml-2 text-[11px] text-[#939db8]">bash — tako-installer (vps-ams-01)</span>
        </div>
        <span className="text-[10px] text-[#939db8]/60 uppercase tracking-widest">stdout</span>
      </div>

      {/* Terminal Output */}
      <div className="p-4 sm:p-5 space-y-2 text-[#dee2e6] leading-relaxed overflow-x-auto bg-[#0b0c14]">
        <div>
          <span className="text-[#5560d6]">$</span> curl -fsSL https://gettako.dev/install.sh | bash
        </div>
        <div className="text-[#939db8]">
          <span className="text-[#7980e0]">==&gt;</span> Detected OS: Ubuntu 24.04 LTS (x86_64)
        </div>
        <div className="text-[#939db8]">
          <span className="text-emerald-400">==&gt;</span> Docker Engine 27.2.0 &amp; Compose v2.29 verified
        </div>
        <div className="text-[#939db8]">
          <span className="text-[#7980e0]">==&gt;</span> Initializing SQLite database with AES-256-GCM encryption key
        </div>
        <div className="text-[#939db8]">
          <span className="text-[#7980e0]">==&gt;</span> Launching TAKO control plane stack...
        </div>
        <div className="pl-4 text-[11px] text-[#939db8]">
          ✔ Container tako-traefik     <span className="text-emerald-400">Started</span> (Ports 80, 443)<br />
          ✔ Container tako-server      <span className="text-emerald-400">Started</span> (Port 8080, gRPC 50051)<br />
          ✔ Container tako-web         <span className="text-emerald-400">Started</span> (Port 3000)<br />
          ✔ Container tako-agent-local <span className="text-emerald-400">Connected</span>
        </div>
        <div className="pt-2 text-emerald-400 font-semibold">
          ================================================================<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎉 TAKO Control Plane Successfully Installed!<br />
          ================================================================
        </div>
        <div className="text-[#dee2e6] pl-2 space-y-0.5 text-[11px]">
          <div>Dashboard URL : <span className="text-[#7980e0] underline">https://tako.yourdomain.com</span></div>
          <div>Direct Web    : <span className="text-[#7980e0]">http://103.23.198.96:3000</span></div>
          <div>Admin Email   : admin@gettako.dev</div>
          <div>Config Path   : /etc/tako</div>
        </div>
      </div>
    </div>
  );
}
