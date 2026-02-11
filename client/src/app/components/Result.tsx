"use client"

interface ResultProps {
    result: {
        url: string;
        is_phishing: boolean;
        danger_score: number;
        reason: string[];
        whois_data?: any;
    } | null;
}

export default function Result({ result }: ResultProps) {
    if (!result) {
        return null;
    }

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                    Analysis Results
                </h2>
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-800">
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Analyzed URL</h3>
                        <p className="text-white break-all">{result.url}</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Verdict</h3>
                        <div className={`inline-flex items-center px-6 py-3 rounded-lg font-bold text-lg ${result.is_phishing
                            ? 'bg-red-600/20 text-red-400 border border-red-600'
                            : 'bg-green-600/20 text-green-400 border border-green-600'
                            }`}>
                            {result.is_phishing ? '⚠️ Potential Phishing Detected' : '✅ Appears Safe'}
                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Danger Score</h3>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 bg-slate-800 rounded-full h-4 overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-500 ${result.danger_score >= 70 ? 'bg-red-500' :
                                        result.danger_score >= 40 ? 'bg-yellow-500' :
                                            'bg-green-500'
                                        }`}
                                    style={{ width: `${result.danger_score}%` }}
                                />
                            </div>
                            <span className="text-white font-bold text-xl min-w-[4rem]">
                                {result.danger_score.toFixed(1)}%
                            </span>
                        </div>
                    </div>
                    {result.reason && result.reason.length > 0 && (
                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-400 mb-3">Detected Issues</h3>
                            <ul className="space-y-2">
                                {result.reason.map((reason, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-300">
                                        <span className="text-yellow-500 mt-1">▸</span>
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {result.whois_data && Object.keys(result.whois_data).length > 0 && (
                        <div className="mt-8 pt-6 border-t border-slate-700">
                            <h3 className="text-sm font-semibold text-gray-400 mb-3">WHOIS Information (Domain Lookup)</h3>
                            <div className="bg-slate-800/50 rounded-lg p-4 text-sm">
                                <pre className="text-gray-300 whitespace-pre-wrap overflow-x-auto">
                                    {JSON.stringify(result.whois_data, null, 2)}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}