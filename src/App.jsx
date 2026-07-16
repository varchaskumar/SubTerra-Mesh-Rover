// src/App.jsx
// ============================================================
// The entire UI — one component, no sub-components.
// <model-viewer> is registered by the CDN script in index.html,
// so no npm import is needed here.
// ============================================================

export default function App() {
  return (
    // ── 2. Full-viewport dark background ───────────────────
    // min-h-screen  → at least the full browser height
    // bg-zinc-950   → very dark near-black background
    // flex + flex-col → stack children vertically
    // items-center  → centre children horizontally
    // justify-center → centre children vertically
    // p-6           → some breathing room on small screens
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6">

      {/* ── 3. Page title ──────────────────────────────────── */}
      {/* text-white, bold, some bottom margin before the viewer */}
      <h1 className="text-white text-2xl font-bold tracking-wide mb-6 text-center">
        Autonomous Tunnel Assistant Robot
      </h1>

      {/* ── 4. Viewer wrapper ──────────────────────────────── */}
      {/* w-full        → fills the available width             */}
      {/* max-w-4xl     → caps width at ~896 px on large screens */}
      {/* aspect-video  → keeps a 16:9 height automatically     */}
      {/* rounded-2xl   → nice rounded corners                  */}
      {/* border        → subtle 1-px border                    */}
      {/* border-zinc-700 → muted grey border colour            */}
      {/* overflow-hidden → clips model-viewer to the rounded box */}
      {/* bg-zinc-900   → dark inner background shown while model loads */}
      {/*                                                        */}
      {/* ✏ TO MAKE THE VIEWER TALLER:                          */}
      {/*   Replace `aspect-video` with e.g. `h-[70vh]`         */}
      {/*                                                        */}
      {/* ✏ TO CHANGE THE BACKGROUND COLOUR:                    */}
      {/*   Replace `bg-zinc-900` with any Tailwind colour       */}
      {/*   e.g. bg-slate-800, bg-neutral-900, bg-black, etc.   */}
      <div className="w-full max-w-4xl aspect-video rounded-2xl border border-zinc-700 overflow-hidden bg-zinc-900">

        {/* ── 5. The <model-viewer> element ────────────────── */}
        {/*                                                      */}
        {/* src="/robot.glb"                                     */}
        {/*   Vite serves everything in /public at the root URL. */}
        {/*   Place your file at:  public/robot.glb              */}
        {/*   ✏ If your exported file has a different name,      */}
        {/*     just change the value here, e.g. src="/arm.glb"  */}
        {/*                                                      */}
        {/* alt            → accessibility label                 */}
        {/* camera-controls → lets the user orbit/zoom with mouse/touch */}
        {/* touch-action="pan-y" → prevents the viewer stealing vertical scroll */}
        {/* shadow-intensity="1" → full-strength contact shadow  */}
        {/* auto-rotate   → slowly spins the model by default    */}
        {/*   ✏ TO DISABLE auto-rotate: simply delete that prop  */}
        {/*                                                      */}
        {/* interaction-prompt="auto"                            */}
        {/*   Shows the hand-drag hint when the user hasn't      */}
        {/*   interacted yet.                                     */}
        {/*                                                      */}
        {/* ── Camera / FOV tuning ─────────────────────────── */}
        {/* If the model appears too small or is invisible:      */}
        {/*                                                      */}
        {/* camera-orbit="0deg 75deg 5m"                         */}
        {/*   Controls starting position: azimuth angle,         */}
        {/*   elevation angle, and distance from model.          */}
        {/*   Increase "5m" → zoom out; decrease → zoom in.     */}
        {/*   Example: camera-orbit="0deg 60deg 3m"              */}
        {/*                                                      */}
        {/* field-of-view="45deg"                                */}
        {/*   Wider angle (e.g. 75deg) shows more of the scene   */}
        {/*   but distorts perspective.  Start around 45deg.     */}
        {/*                                                      */}
        {/* min-camera-orbit="auto auto 1m"                      */}
        {/* max-camera-orbit="auto auto 20m"                     */}
        {/*   Clamps how close/far the user can zoom.            */}
        {/*   Increase the max if your model is large.           */}
        <model-viewer
          src="/robot.glb"
          alt="Autonomous Tunnel Assistant Robot"
          camera-controls
          touch-action="pan-y"
          shadow-intensity="1"
          auto-rotate
          interaction-prompt="auto"
          style={{ width: '100%', height: '100%' }}
        />
        {/* ↑ style prop is needed because JSX ignores the CSS
              rule for model-viewer on first render in some
              bundler setups. It's redundant-but-safe.           */}
      </div>

      {/* ── 6. Small hint text below viewer ──────────────── */}
      <p className="mt-4 text-zinc-500 text-sm text-center">
        Drag to rotate · Scroll to zoom · Place <code className="text-zinc-400">robot.glb</code> in <code className="text-zinc-400">public/</code>
      </p>

    </div>
  )
}
