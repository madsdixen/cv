{/* Experience */}
<section className="mx-auto max-w-5xl px-4 py-8">
  <div className="flex items-center gap-3">
    <h3 className="text-xl font-semibold tracking-tight">Experience</h3>
    <div className="h-px flex-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400" />
  </div>
  <div className="mt-8 relative border-l-2 border-slate-200">
    {experience.map((item, idx) => (
      <div key={idx} className="mb-10 ml-6">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 ring-4 ring-white">
        </span>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-base font-semibold">
            {item.role} <span className="text-slate-500">· {item.org}</span>
          </h4>
          <span className="mt-1 text-sm text-slate-500 sm:mt-0">{item.period}</span>
        </div>
        {item.logo && (
          <div className="mt-2">
            <img
              src={item.logo}
              alt={`${item.org} logo`}
              className="max-h-16 max-w-32 object-contain"
            />
          </div>
        )}
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    ))}
  </div>
</section>
