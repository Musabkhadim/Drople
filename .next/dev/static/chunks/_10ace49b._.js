(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSection() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            setIsVisible(true);
            if (videoRef.current) videoRef.current.load();
        }
    }["HeroSection.useEffect"], []);
    const scrollToNextSection = ()=>{
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative min-h-screen w-full flex items-center justify-center pt-18 pb-20 overflow-hidden bg-cover bg-center",
        style: {
            backgroundImage: "url('/heresection.png')"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 lg:px-8 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `space-y-4 mt-4 sm:mt-8 lg:mt-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-5xl md:text-6xl lg:text-7xl font-bold text-[#1B3C53] leading-tight",
                                            children: "Web Dev, Digital Marketing & Video Editing Services"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-[#234C6A] leading-relaxed max-w-2xl",
                                            children: "Premium digital solutions including custom websites, web applications, digital marketing, and professional video editing."
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 44,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/get-started",
                                            prefetch: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "group px-8 py-4 rounded-full bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2",
                                                children: [
                                                    "Get Started",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 18,
                                                        className: "group-hover:translate-x-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/services/video-editing",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-8 py-4 rounded-full glassmorphic text-[#1B3C53] font-semibold border border-[#1B3C53]/30 hover:bg-[#234C6A]/20 transition-all flex items-center gap-2 justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/hero-section.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Explore Our Work"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-8 pt-8 border-t border-[#234C6A]/30",
                                    children: [
                                        {
                                            value: "300+",
                                            label: "Projects Delivered"
                                        },
                                        {
                                            value: "90+",
                                            label: "Happy Clients"
                                        },
                                        {
                                            value: "3+ Years",
                                            label: "Industry Experience"
                                        }
                                    ].map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold text-[#1B3C53]",
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-[#234C6A]",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/components/hero-section.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/hero-section.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/hero-section.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 38,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-center px-2 sm:px-4 transition-all duration-1000 delay-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-[900px] h-[220px] sm:h-[280px] lg:h-[360px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 glass-card-accent rounded-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 95,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-3xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                ref: videoRef,
                                                src: "/here.mp4",
                                                autoPlay: true,
                                                muted: true,
                                                loop: true,
                                                playsInline: true,
                                                preload: "metadata",
                                                className: "absolute inset-0 w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 98,
                                                columnNumber: 7
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-[#1B3C53]/20 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero-section.tsx",
                                                lineNumber: 108,
                                                columnNumber: 7
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero-section.tsx",
                                        lineNumber: 97,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero-section.tsx",
                                lineNumber: 93,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero-section.tsx",
                            lineNumber: 92,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: scrollToNextSection,
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-[#234C6A] hover:text-[#1B3C53] animate-bounce",
                "aria-label": "Scroll",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/components/hero-section.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-section.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero-section.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "GmtWoodYLqNZ4jMHbt3esNldVSI=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/services-overview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const services = [
    {
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        video: "/webvectore.mp4",
        features: [
            "React & Next.js",
            "Responsive Design",
            "Performance Optimized",
            "SEO-Friendly & Fast Loading"
        ],
        href: "/services/web-development"
    },
    {
        title: "Digital Marketing",
        description: "Strategic marketing solutions to grow your online presence",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        video: "/digitalvectore.mp4",
        features: [
            "SEO",
            "PPC google & meta Ads",
            "Content Strategy",
            "Analytics"
        ],
        href: "/services/digital-marketing"
    },
    {
        title: "Video Editing",
        description: "Professional video editing services for engaging and high-quality content",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"],
        video: "/video.mp4",
        features: [
            "Short-form Content",
            "Documentary Videos",
            "Whiteboard Animation",
            "YouTube Optimization"
        ],
        href: "/services/video-editing"
    }
];
function ServicesOverview() {
    _s();
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false
    ]);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Intersection Observer with faster threshold
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesOverview.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ServicesOverview.useEffect": (entries)=>{
                    entries.forEach({
                        "ServicesOverview.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const index = Number.parseInt(entry.target.getAttribute("data-index") || "0");
                                setVisibleCards({
                                    "ServicesOverview.useEffect": (prev)=>{
                                        const newVisible = [
                                            ...prev
                                        ];
                                        newVisible[index] = true;
                                        return newVisible;
                                    }
                                }["ServicesOverview.useEffect"]);
                                const video = videoRefs.current[index];
                                if (video) {
                                    video.play().catch({
                                        "ServicesOverview.useEffect": (e)=>console.log("Auto-play prevented:", e)
                                    }["ServicesOverview.useEffect"]);
                                }
                            }
                        }
                    }["ServicesOverview.useEffect"]);
                }
            }["ServicesOverview.useEffect"], {
                threshold: 0.05,
                rootMargin: "50px"
            });
            if (containerRef.current) {
                containerRef.current.querySelectorAll("[data-index]").forEach({
                    "ServicesOverview.useEffect": (el)=>observer.observe(el)
                }["ServicesOverview.useEffect"]);
            }
            return ({
                "ServicesOverview.useEffect": ()=>observer.disconnect()
            })["ServicesOverview.useEffect"];
        }
    }["ServicesOverview.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative py-24 bg-background overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pill-badge bg-[#A3C6C4]/10 text-[#1E415A] border border-[#A3C6C4]/30",
                                children: "Our Expertise"
                            }, void 0, false, {
                                fileName: "[project]/components/services-overview.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/services-overview.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-[#1E415A] mb-4",
                            children: "Smart Services to Grow Your Business"
                        }, void 0, false, {
                            fileName: "[project]/components/services-overview.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[#6C7A89] max-w-2xl mx-auto",
                            children: "We deliver result-driven digital solutions designed around your business goals"
                        }, void 0, false, {
                            fileName: "[project]/components/services-overview.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/services-overview.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 relative",
                    children: services.map((service, index)=>{
                        const IconComponent = service.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-index": index,
                            className: `group relative transition-all duration-500 ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: service.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A3C6C4]/5 to-[#6C7A89]/5 border border-[#A3C6C4]/20 group-hover:border-[#A3C6C4]/40 transition-all duration-300 group-hover:bg-[#A3C6C4]/10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services-overview.tsx",
                                            lineNumber: 108,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-3xl bg-gradient-to-r from-[#A3C6C4]/10 to-transparent blur-xl"
                                            }, void 0, false, {
                                                fileName: "[project]/components/services-overview.tsx",
                                                lineNumber: 112,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/services-overview.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 p-8 h-full flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6 h-48 rounded-2xl overflow-hidden bg-[#F9FAF5] relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                            ref: (el)=>videoRefs.current[index] = el,
                                                            src: service.video,
                                                            muted: true,
                                                            loop: true,
                                                            playsInline: true,
                                                            preload: "metadata",
                                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/services-overview.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-t from-[#354649]/20 via-transparent to-transparent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/services-overview.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/services-overview.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-lg bg-[#1D4059]/10 flex items-center justify-center mb-4 group-hover:bg-[#1D4059]/20 transition-colors duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        size: 24,
                                                        className: "text-[#1D4059]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services-overview.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/services-overview.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-[#1D4059] mb-2 group-hover:text-[#A3C6C4] transition-colors duration-300",
                                                    children: service.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/services-overview.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#6C7A89] mb-6 flex-grow",
                                                    children: service.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/services-overview.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 mb-6",
                                                    children: service.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-sm text-[#6C7A89]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-[#A3C6C4]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/services-overview.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 29
                                                                }, this),
                                                                feature
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/components/services-overview.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/services-overview.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[#1D4059] font-semibold flex items-center gap-2 group-hover/cta:gap-3 transition-all duration-300",
                                                    children: [
                                                        "Learn More",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "group-hover/cta:translate-x-2 transition-transform duration-300",
                                                            children: "→"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/services-overview.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/services-overview.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/services-overview.tsx",
                                            lineNumber: 116,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/services-overview.tsx",
                                    lineNumber: 106,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/services-overview.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/services-overview.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/services-overview.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/services-overview.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/services-overview.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(ServicesOverview, "EvJHD+FY4Ir1LDDectZyxWuUFlM=");
_c = ServicesOverview;
var _c;
__turbopack_context__.k.register(_c, "ServicesOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/case-studies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioSections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Video Cards Data - ALL YOUTUBE VIDEOS WITH SOUND
const videoEditingCards = [
    {
        id: 1,
        title: "Reel & Short Video",
        videoUrl: "https://www.youtube.com/watch?v=7-DMYomzCrE",
        embedUrl: "https://www.youtube.com/embed/7-DMYomzCrE",
        color: "linear-gradient(135deg, #000000 0%, #0b0b0b 50%, #1a1a1a 100%)",
        category: "Documentary",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/YIp3ZYo5hoU/hqdefault.jpg"
    },
    {
        id: 2,
        title: " Before After ",
        videoUrl: "https://www.youtube.com/watch?v=EKd4nsBlLSY",
        embedUrl: "https://www.youtube.com/embed/EKd4nsBlLSY",
        color: "linear-gradient(135deg, #bcd6ff 0%, #cfe4ff 50%, #e0eeff 100%)",
        category: "Commercial",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/EKd4nsBlLSY/hqdefault.jpg"
    },
    {
        id: 3,
        title: "Brand Story",
        videoUrl: "https://www.youtube.com/watch?v=DQ27fIwt8lo",
        embedUrl: "https://www.youtube.com/embed/DQ27fIwt8lo",
        color: "linear-gradient(135deg, #697586 0%, #59606a 50%, #4a5260 100%)",
        category: "Branding",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/DQ27fIwt8lo/hqdefault.jpg"
    },
    {
        id: 4,
        title: "Anime Video",
        videoUrl: "https://www.youtube.com/watch?v=wX1BBfRMfEY",
        embedUrl: "https://www.youtube.com/embed/wX1BBfRMfEY",
        color: "linear-gradient(135deg, #202939 0%, #2b3a4a 50%, #3a4a5b 100%)",
        category: "Business",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/wX1BBfRMfEY/hqdefault.jpg"
    },
    {
        id: 5,
        title: "Documentary video",
        videoUrl: "https://www.youtube.com/watch?v=LAJZBD14PX0",
        embedUrl: "https://www.youtube.com/embed/LAJZBD14PX0",
        color: "linear-gradient(135deg, #cdd5df 0%, #dfe6ed 50%, #f0f5ff 100%)",
        category: "Social Media",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/LAJZBD14PX0/hqdefault.jpg"
    },
    {
        id: 6,
        title: " Advertisement video",
        videoUrl: "https://www.youtube.com/watch?v=_-G8tyi3nr4",
        embedUrl: "https://www.youtube.com/embed/_-G8tyi3nr4",
        color: "linear-gradient(135deg, #4A5568 0%, #2D3748 50%, #1a202c 100%)",
        category: "Events",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/Jxax8vkUJ0Q/hqdefault.jpg"
    },
    {
        id: 7,
        title: "Youtube Content",
        videoUrl: "https://www.youtube.com/shorts/N_ze7bQykec",
        embedUrl: "https://www.youtube.com/embed/N_ze7bQykec",
        color: "linear-gradient(135deg, #805AD5 0%, #6B46C1 50%, #553C9A 100%)",
        category: "Training",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/N_ze7bQykec/hqdefault.jpg"
    },
    {
        id: 8,
        title: "VSL",
        videoUrl: "https://www.youtube.com/shorts/Pfol_fC2FmE",
        embedUrl: "https://www.youtube.com/embed/Pfol_fC2FmE",
        color: "linear-gradient(135deg, #F6AD55 0%, #ED8936 50%, #DD6B20 100%)",
        category: "Animation",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/Pfol_fC2FmE/hqdefault.jpg"
    },
    {
        id: 9,
        title: "Commercial Ad",
        videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
        color: "linear-gradient(135deg, #38B2AC 0%, #319795 50%, #2C7A7B 100%)",
        category: "Advertisement",
        description: "",
        technologies: [],
        thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg"
    }
];
// Web Development Projects Data - ADDED BACK
const webDevProjects = [
    {
        id: 1,
        title: "Travel & Tourism Website",
        image: "/bmgulf.png",
        stats: "+60% Online Inquiries",
        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Node.js",
            "SEO Tools"
        ],
        description: "A modern travel and tourism website designed to showcase tour packages, destinations, and services with a fast and user-friendly experience.",
        features: [
            "Tour & Holiday Packages",
            "Destination Pages",
            "Inquiry & Booking Forms",
            "Responsive Design",
            "SEO Optimized Pages",
            "Fast Loading Performance"
        ],
        duration: "2 months",
        teamSize: "3 developers",
        client: "BMGulf Travel & Tourism",
        results: "Improved online visibility and increased customer inquiries",
        liveLink: "https://www.bmgulftravel.com/"
    },
    {
        id: 2,
        title: "High-Authority Do-Follow Backlink",
        image: "/cricaismus.png",
        stats: "High Domain Authority Website",
        technologies: [
            "SEO",
            "Link Building",
            "Content Placement",
            "Anchor Optimization"
        ],
        description: "Provided high-quality do-follow backlinks from a niche-relevant cricket website to improve domain authority, keyword rankings, and organic search visibility.",
        features: [
            "Do-Follow Backlinks",
            "Niche-Relevant Website",
            "Contextual Link Placement",
            "SEO-Friendly Anchor Text",
            "Permanent Links",
            "Google-Safe Link Building"
        ],
        duration: "Ongoing SEO Campaign",
        teamSize: "SEO Specialist",
        client: "Multiple SEO Clients",
        results: "Improved keyword rankings and increased organic traffic",
        liveLink: "https://www.cricaismus.com/"
    },
    {
        id: 3,
        title: "Future IT Technology web application",
        image: "/fit.png",
        stats: "4.8★ Rating",
        technologies: [
            "React Native",
            "Firebase",
            "Redux",
            "GraphQL",
            "Expo",
            "Push Notifications"
        ],
        description: "Cross-platform mobile app designed for health & fitness enthusiasts, featuring offline capabilities, social login, and push notifications for maximum user engagement.",
        features: [
            "Offline Mode Support",
            "Push Notifications & Alerts",
            "Social Login Integration",
            "In-app Purchases",
            "Dark Mode UI",
            "Multi-language Support"
        ],
        duration: "4 months",
        teamSize: "3 developers",
        client: "Future IT Technology",
        results: "Achieved 4.8★ rating with 10K+ downloads across Android & iOS",
        liveLink: "https://futureittechnology.com/"
    },
    {
        id: 4,
        title: "Altawam Laptops E-Commerce Platform",
        image: "/altawam.png",
        stats: "200+ Products",
        technologies: [
            "vite",
            "firebase",
            "WebSocket",
            "Redis"
        ],
        description: "Full-featured e-commerce platform for laptops and electronics, with secure checkout, real-time inventory updates, and product management dashboard. SEO-optimized to increase online sales and visibility.",
        features: [
            "Product Listings",
            "Virtual Product Tours",
            "Admin & Vendor Dashboard",
            "Secure Booking & Checkout System",
            "Document & Invoice Management",
            "Live Chat Support"
        ],
        duration: "6 months",
        teamSize: "5 developers",
        client: "Altawam Laptops",
        results: "Successfully launched 200+ products with seamless online shopping experience",
        liveLink: "https://www.altawamlaptops.com/"
    },
    {
        id: 5,
        title: "Food Delivery App",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop",
        stats: "50K+ Orders",
        technologies: [
            "Flutter",
            "Node.js",
            "MongoDB",
            "Google Maps",
            "Socket.io",
            "Payment Gateway"
        ],
        description: "Food delivery application with real-time tracking and multiple restaurant integration.",
        features: [
            "Restaurant Listings",
            "Real-time Tracking",
            "Order History",
            "Reviews",
            "Multiple Payment Options",
            "Promotions"
        ],
        duration: "4 months",
        teamSize: "4 developers",
        client: "Food Delivery Startup",
        results: "Processed 50K+ orders in 6 months",
        liveLink: "https://example-foodapp.com"
    },
    {
        id: 6,
        title: "Learning Management System",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
        stats: "5K+ Students",
        technologies: [
            "Angular",
            "Python Django",
            "PostgreSQL",
            "AWS S3",
            "Video Streaming",
            "Zoom API"
        ],
        description: "Online learning platform with video courses, quizzes, and certification.",
        features: [
            "Video Courses",
            "Quizzes",
            "Progress Tracking",
            "Certificates",
            "Discussion Forum",
            "Live Classes"
        ],
        duration: "7 months",
        teamSize: "8 developers",
        client: "Education Institute",
        results: "5,000+ students enrolled in first 3 months",
        liveLink: "https://example-lms.com"
    }
];
// Digital Marketing Projects Data - ADDED BACK
const digitalMarketingProjects = [
    {
        id: 1,
        title: "SEO Campaign",
        image: "/seo.png",
        stats: "5M+ Impressions",
        technologies: [
            "Keyword Research",
            "Technical SEO",
            "Content Strategy",
            "Link Building",
            "Local SEO",
            "Analytics"
        ],
        description: "Comprehensive SEO strategy resulting in 300% increase in organic traffic over 6 months.",
        features: [
            "Keyword Optimization",
            "Backlink Building",
            "Content Creation",
            "Performance Tracking",
            "Competitor Analysis",
            "Reporting"
        ],
        duration: "6 months",
        teamSize: "3 specialists",
        client: "E-commerce Store",
        results: "300% increase in organic traffic"
    },
    {
        id: 2,
        title: "Social Media Campaign",
        image: "/socialmedia.jpg",
        stats: "+180% Engagement",
        technologies: [
            "Content Creation",
            "Community Management",
            "Paid Advertising",
            "Analytics",
            "Influencer Marketing",
            "Social Listening"
        ],
        description: "Social media campaign that increased brand engagement and follower growth by 180%.",
        features: [
            "Content Calendar",
            "Paid Ads",
            "Influencer Collaboration",
            "Engagement Tracking",
            "Hashtag Strategy",
            "Community Building"
        ],
        duration: "4 months",
        teamSize: "4 specialists",
        client: "Beauty Brand",
        results: "180% increase in engagement rate"
    },
    {
        id: 3,
        title: "Brand Awareness",
        image: "/brand.jpg",
        stats: "50M+ Reach",
        technologies: [
            "Influencer Marketing",
            "PR Campaigns",
            "Content Marketing",
            "Brand Partnerships",
            "Event Marketing",
            "Media Buying"
        ],
        description: "Multi-channel brand awareness campaign reaching over 50 million potential customers.",
        features: [
            "Media Planning",
            "Influencer Outreach",
            "PR Distribution",
            "Content Creation",
            "Event Management",
            "Performance Analysis"
        ],
        duration: "8 months",
        teamSize: "6 specialists",
        client: "Tech Company",
        results: "50M+ potential customers reached"
    },
    {
        id: 4,
        title: "Email Marketing",
        image: "/email.jpg",
        stats: "40% Open Rate",
        technologies: [
            "Email Automation",
            "Segmentation",
            "A/B Testing",
            "CRM Integration",
            "Analytics",
            "Personalization"
        ],
        description: "Targeted email marketing campaign with personalized content and automation.",
        features: [
            "Automation Workflows",
            "Segmentation",
            "Personalization",
            "A/B Testing",
            "Analytics Dashboard",
            "CRM Sync"
        ],
        duration: "3 months",
        teamSize: "2 specialists",
        client: "SaaS Company",
        results: "40% open rate and 15% CTR"
    },
    {
        id: 5,
        title: "PPC Advertising",
        image: "/ppc.png",
        stats: "ROI: 450%",
        technologies: [
            "Google Ads",
            "Facebook Ads",
            "LinkedIn Ads",
            "Conversion Tracking",
            "Remarketing",
            "Budget Optimization"
        ],
        description: "Pay-per-click campaign focused on lead generation and conversion optimization.",
        features: [
            "Keyword Research",
            "Ad Creation",
            "Landing Pages",
            "Conversion Tracking",
            "Remarketing",
            "Performance Reports"
        ],
        duration: "5 months",
        teamSize: "3 specialists",
        client: "B2B Service Provider",
        results: "450% ROI on ad spend"
    },
    {
        id: 6,
        title: "Content Marketing",
        image: "content.png",
        stats: "10K+ Leads",
        technologies: [
            "Blog Writing",
            "Video Content",
            "Infographics",
            "Case Studies",
            "Whitepapers",
            "Content Distribution"
        ],
        description: "Content marketing strategy establishing thought leadership and generating qualified leads.",
        features: [
            "Content Calendar",
            "SEO Optimization",
            "Content Creation",
            "Distribution Strategy",
            "Lead Magnets",
            "Analytics"
        ],
        duration: "9 months",
        teamSize: "4 specialists",
        client: "Consulting Firm",
        results: "10,000+ qualified leads generated"
    }
];
function PortfolioSections() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("video");
    const [playingVideo, setPlayingVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [focusedCard, setFocusedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrolling, setScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTablet, setIsTablet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoMuted, setVideoMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(videoEditingCards.length).fill(false));
    const [isHoveringVideo, setIsHoveringVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const iframeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Optimized resize handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioSections.useEffect": ()=>{
            const checkDevice = {
                "PortfolioSections.useEffect.checkDevice": ()=>{
                    const width = window.innerWidth;
                    setIsMobile(width < 768);
                    setIsTablet(width >= 768 && width < 1024);
                }
            }["PortfolioSections.useEffect.checkDevice"];
            checkDevice();
            const debouncedResize = debounce(checkDevice, 100);
            window.addEventListener('resize', debouncedResize);
            return ({
                "PortfolioSections.useEffect": ()=>{
                    window.removeEventListener('resize', debouncedResize);
                }
            })["PortfolioSections.useEffect"];
        }
    }["PortfolioSections.useEffect"], []);
    // Intersection Observer for animations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioSections.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "PortfolioSections.useEffect": (entries)=>{
                    entries.forEach({
                        "PortfolioSections.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const index = Number(entry.target.getAttribute("data-index") || "0");
                                setVisibleCards({
                                    "PortfolioSections.useEffect": (prev)=>{
                                        const newVisible = [
                                            ...prev
                                        ];
                                        newVisible[index] = true;
                                        return newVisible;
                                    }
                                }["PortfolioSections.useEffect"]);
                            }
                        }
                    }["PortfolioSections.useEffect"]);
                }
            }["PortfolioSections.useEffect"], {
                threshold: 0.1,
                rootMargin: '50px'
            });
            const cards = sectionRef.current?.querySelectorAll("[data-index]");
            cards?.forEach({
                "PortfolioSections.useEffect": (el)=>observer.observe(el)
            }["PortfolioSections.useEffect"]);
            return ({
                "PortfolioSections.useEffect": ()=>observer.disconnect()
            })["PortfolioSections.useEffect"];
        }
    }["PortfolioSections.useEffect"], [
        activeSection
    ]);
    // Scroll handling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioSections.useEffect": ()=>{
            let scrollTimeout;
            const handleScroll = {
                "PortfolioSections.useEffect.handleScroll": ()=>{
                    setScrolling(true);
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout({
                        "PortfolioSections.useEffect.handleScroll": ()=>{
                            setScrolling(false);
                        }
                    }["PortfolioSections.useEffect.handleScroll"], 100);
                }
            }["PortfolioSections.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "PortfolioSections.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    clearTimeout(scrollTimeout);
                }
            })["PortfolioSections.useEffect"];
        }
    }["PortfolioSections.useEffect"], []);
    // Handle video play/pause with sound control (UPDATED)
    const handleVideoClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioSections.useCallback[handleVideoClick]": (index)=>{
            if (playingVideo === index) {
                // If clicking the same video, pause it
                setPlayingVideo(null);
                setFocusedCard(null);
                const iframe = iframeRefs.current[index];
                if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            } else {
                // Pause any currently playing video
                if (playingVideo !== null) {
                    const prevIframe = iframeRefs.current[playingVideo];
                    if (prevIframe && prevIframe.contentWindow) {
                        prevIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }
                }
                // Play the new video with sound
                setPlayingVideo(index);
                setFocusedCard(index);
                // Give iframe time to load, then unmute and play
                setTimeout({
                    "PortfolioSections.useCallback[handleVideoClick]": ()=>{
                        const iframe = iframeRefs.current[index];
                        if (iframe && iframe.contentWindow) {
                            // First, unmute the video
                            iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
                            // Then play it
                            setTimeout({
                                "PortfolioSections.useCallback[handleVideoClick]": ()=>{
                                    iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                                }
                            }["PortfolioSections.useCallback[handleVideoClick]"], 100);
                        }
                    }
                }["PortfolioSections.useCallback[handleVideoClick]"], 300);
            }
        }
    }["PortfolioSections.useCallback[handleVideoClick]"], [
        playingVideo
    ]);
    // Handle mute toggle for specific video (NEW)
    const handleMuteToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioSections.useCallback[handleMuteToggle]": (index, e)=>{
            e.stopPropagation();
            setVideoMuted({
                "PortfolioSections.useCallback[handleMuteToggle]": (prev)=>{
                    const newMuted = [
                        ...prev
                    ];
                    newMuted[index] = !newMuted[index];
                    // Send mute/unmute command to YouTube iframe
                    const iframe = iframeRefs.current[index];
                    if (iframe && iframe.contentWindow) {
                        if (newMuted[index]) {
                            iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
                        } else {
                            iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
                        }
                    }
                    return newMuted;
                }
            }["PortfolioSections.useCallback[handleMuteToggle]"]);
        }
    }["PortfolioSections.useCallback[handleMuteToggle]"], []);
    // Enhanced Card positioning calculations with 3D effects
    const getCardTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioSections.useCallback[getCardTransform]": (index, isFocused)=>{
            if (isMobile) {
                // Mobile: Stack cards vertically with minimal overlap for better touch interaction
                if (isFocused) {
                    return "translateY(0px) scale(1) translateZ(30px) rotateX(0deg)";
                }
                const offset = (index - (focusedCard || 0)) * 20;
                const scale = Math.max(0.85, 1 - Math.abs(index - (focusedCard || 0)) * 0.05);
                return `translateY(${offset}px) scale(${scale}) translateZ(0px) rotateX(0deg)`;
            }
            if (isTablet) {
                // Tablet layout with 3D
                const centerIndex = 2;
                const positionFromCenter = index - centerIndex;
                if (isFocused) {
                    return "translateX(0px) scale(1.1) translateZ(60px) rotateY(0deg)";
                }
                const xOffset = positionFromCenter * 120;
                const scale = 1 - Math.abs(positionFromCenter) * 0.03;
                const rotateY = -positionFromCenter * 2.5;
                return `translateX(${xOffset}px) scale(${scale}) translateZ(${Math.abs(positionFromCenter) * -8}px) rotateY(${rotateY}deg)`;
            }
            // Desktop layout with full 3D
            const centerIndex = 4;
            const positionFromCenter = index - centerIndex;
            if (isFocused) {
                return "translateX(0px) scale(1.15) translateZ(80px) rotateY(0deg) rotateX(0deg)";
            }
            const xOffset = positionFromCenter * 140;
            const scale = 1 - Math.abs(positionFromCenter) * 0.035;
            const rotateY = -positionFromCenter * 1.8;
            const rotateX = Math.abs(positionFromCenter) * -0.3;
            const zOffset = Math.abs(positionFromCenter) * -12;
            return `translateX(${xOffset}px) scale(${scale}) translateZ(${zOffset}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        }
    }["PortfolioSections.useCallback[getCardTransform]"], [
        isMobile,
        isTablet,
        focusedCard
    ]);
    const getCardZIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioSections.useCallback[getCardZIndex]": (index, isFocused)=>{
            if (isFocused) return 100;
            if (isMobile) {
                const centerIndex = focusedCard || 0;
                const distanceFromCenter = Math.abs(index - centerIndex);
                return 50 - distanceFromCenter;
            }
            const centerIndex = isTablet ? 2 : 4;
            const distanceFromCenter = Math.abs(index - centerIndex);
            return 60 - distanceFromCenter * 2;
        }
    }["PortfolioSections.useCallback[getCardZIndex]"], [
        isMobile,
        isTablet,
        focusedCard
    ]);
    // Get YouTube URL with proper parameters
    const getYouTubeEmbedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioSections.useCallback[getYouTubeEmbedUrl]": (embedUrl, isPlaying, isMuted)=>{
            const baseUrl = embedUrl.split('?')[0];
            const params = new URLSearchParams({
                rel: '0',
                modestbranding: '1',
                iv_load_policy: '3',
                enablejsapi: '1',
                origin: ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable"
            });
            if (isPlaying) {
                params.set('autoplay', '1');
            }
            if (isMuted) {
                params.set('mute', '1');
            } else {
                params.set('mute', '0');
            }
            return `${baseUrl}?${params.toString()}`;
        }
    }["PortfolioSections.useCallback[getYouTubeEmbedUrl]"], []);
    // Render video cards with YouTube iframes (UPDATED)
    const renderVideoCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioSections.useCallback[renderVideoCards]": ()=>{
            const maxCards = isMobile ? 3 : isTablet ? 5 : videoEditingCards.length;
            const cardsToRender = videoEditingCards.slice(0, maxCards);
            return cardsToRender.map({
                "PortfolioSections.useCallback[renderVideoCards]": (card, index)=>{
                    const isFocused = focusedCard === index;
                    const isPlaying = playingVideo === index;
                    const isVisible = visibleCards[index] ?? false;
                    const isMuted = videoMuted[index] ?? false;
                    const isHovering = isHoveringVideo === index;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-index": index,
                        onMouseEnter: {
                            "PortfolioSections.useCallback[renderVideoCards]": ()=>setIsHoveringVideo(index)
                        }["PortfolioSections.useCallback[renderVideoCards]"],
                        onMouseLeave: {
                            "PortfolioSections.useCallback[renderVideoCards]": ()=>setIsHoveringVideo(null)
                        }["PortfolioSections.useCallback[renderVideoCards]"],
                        onClick: {
                            "PortfolioSections.useCallback[renderVideoCards]": ()=>handleVideoClick(index)
                        }["PortfolioSections.useCallback[renderVideoCards]"],
                        className: `absolute transition-all duration-500 ease-[cubic-bezier(0.2,0.85,0.3,1.05)] cursor-pointer transform-gpu group ${isVisible ? 'opacity-100' : 'opacity-0'} ${isMobile ? 'touch-pan-y' : ''}`,
                        style: {
                            transform: getCardTransform(index, isFocused),
                            width: isMobile ? '85vw' : isTablet ? '300px' : '320px',
                            maxWidth: isMobile ? '280px' : 'none',
                            height: isMobile ? 'calc(85vw * 1.25)' : isTablet ? '360px' : '380px',
                            maxHeight: isMobile ? '350px' : 'none',
                            left: '50%',
                            marginLeft: isMobile ? '-42.5vw' : isTablet ? '-150px' : '-160px',
                            transitionDelay: `${index * 40}ms`,
                            willChange: 'transform',
                            zIndex: getCardZIndex(index, isFocused),
                            transformStyle: 'preserve-3d',
                            backfaceVisibility: 'hidden',
                            top: isMobile ? '0' : '0',
                            pointerEvents: 'auto',
                            perspective: '1000px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full rounded-3xl overflow-hidden relative shadow-2xl transition-all duration-500",
                                style: {
                                    background: card.color,
                                    border: isFocused ? '3px solid rgba(59, 130, 246, 0.5)' : isHovering ? '2px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: isFocused ? `0 20px 40px -10px rgba(0, 0, 0, 0.5),
                   0 10px 20px rgba(30, 66, 91, 0.4),
                   0 0 0 2px rgba(59, 130, 246, 0.4)` : isHovering ? `0 15px 30px -10px rgba(0, 0, 0, 0.35),
                   0 8px 15px rgba(30, 66, 91, 0.25),
                   0 0 0 1px rgba(255, 255, 255, 0.15)` : `0 10px 25px -8px rgba(0, 0, 0, 0.25),
                   0 5px 10px rgba(30, 66, 91, 0.2),
                   0 0 0 1px rgba(255, 255, 255, 0.08)`,
                                    transform: 'translateZ(0)',
                                    filter: isFocused ? 'brightness(1.1) saturate(1.1)' : isHovering ? 'brightness(1.05)' : 'brightness(1)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-px rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-black/10 opacity-60 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 rounded-3xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 transform-gpu",
                                        style: {
                                            transformStyle: 'preserve-3d'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                ref: {
                                                    "PortfolioSections.useCallback[renderVideoCards]": (el)=>{
                                                        iframeRefs.current[index] = el;
                                                    }
                                                }["PortfolioSections.useCallback[renderVideoCards]"],
                                                src: getYouTubeEmbedUrl(card.embedUrl, isPlaying, isMuted),
                                                className: "w-full h-full object-cover transform-gpu",
                                                frameBorder: "0",
                                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                allowFullScreen: true,
                                                title: card.title,
                                                style: {
                                                    transform: 'translateZ(1px)',
                                                    backfaceVisibility: 'hidden',
                                                    pointerEvents: 'auto'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this),
                                            !isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center justify-center transform-gpu cursor-pointer group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/60 group-hover:to-transparent transition-all duration-300",
                                                style: {
                                                    transform: 'translateZ(2px)'
                                                },
                                                onClick: {
                                                    "PortfolioSections.useCallback[renderVideoCards]": (e)=>{
                                                        e.stopPropagation();
                                                        handleVideoClick(index);
                                                    }
                                                }["PortfolioSections.useCallback[renderVideoCards]"],
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group/play",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-br from-red-600/40 to-red-500/30 blur-xl transform-gpu animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/case-studies.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-white/80 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm whitespace-nowrap border border-white/10",
                                                            children: isMobile ? 'Tap to play' : ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/case-studies.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/case-studies.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 606,
                                                columnNumber: 17
                                            }, this),
                                            (isPlaying || isHovering) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 right-3 flex flex-col gap-2 transform-gpu opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                style: {
                                                    transform: 'translateZ(5px)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: {
                                                            "PortfolioSections.useCallback[renderVideoCards]": (e)=>handleMuteToggle(index, e)
                                                        }["PortfolioSections.useCallback[renderVideoCards]"],
                                                        className: "w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-110 transition-all duration-200 shadow-lg",
                                                        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                            className: "w-5 h-5 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/case-studies.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            className: "w-5 h-5 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/case-studies.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/case-studies.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: card.videoUrl,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        onClick: {
                                                            "PortfolioSections.useCallback[renderVideoCards]": (e)=>e.stopPropagation()
                                                        }["PortfolioSections.useCallback[renderVideoCards]"],
                                                        className: "w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-110 transition-all duration-200 shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "w-4 h-4 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/case-studies.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/case-studies.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 628,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 588,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/20 via-white/8 to-transparent transform-gpu",
                                        style: {
                                            transform: 'translateZ(1px)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 659,
                                        columnNumber: 13
                                    }, this),
                                    isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-4 right-4 transform-gpu",
                                        style: {
                                            transform: 'translateZ(15px)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `px-3 py-1.5 rounded-full backdrop-blur-md text-white text-xs font-medium border shadow-lg flex items-center gap-2 ${isMuted ? 'bg-gradient-to-r from-gray-600/30 to-gray-500/20 border-gray-500/30' : 'bg-gradient-to-r from-green-600/30 to-green-500/20 border-green-500/30'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-1.5 h-1.5 rounded-full ${isMuted ? 'bg-gray-400' : 'bg-green-400 animate-pulse'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/case-studies.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 19
                                                }, this),
                                                isMuted ? 'Muted' : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 667,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 666,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/85 to-transparent transform-gpu",
                                        style: {
                                            transform: 'translateZ(20px)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-white mb-2 drop-shadow-lg line-clamp-1 transform-gpu",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 683,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-white/70 mb-3 line-clamp-2 transform-gpu",
                                                children: card.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 686,
                                                columnNumber: 15
                                            }, this),
                                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-3 transform-gpu",
                                                children: card.technologies.slice(0, 3).map({
                                                    "PortfolioSections.useCallback[renderVideoCards]": (tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90",
                                                            children: tech
                                                        }, i, false, {
                                                            fileName: "[project]/components/case-studies.tsx",
                                                            lineNumber: 694,
                                                            columnNumber: 21
                                                        }, this)
                                                }["PortfolioSections.useCallback[renderVideoCards]"])
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 692,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between transform-gpu",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#1D4059] to-[#2A5A7B] text-white",
                                                        children: card.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/case-studies.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/case-studies.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 705,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 679,
                                        columnNumber: 13
                                    }, this),
                                    isPlaying && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-20 left-5 right-5 transform-gpu",
                                        style: {
                                            transform: 'translateZ(25px)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 w-full bg-gradient-to-r from-white/15 to-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 animate-progress shadow-lg",
                                                style: {
                                                    animationDuration: '30s',
                                                    animationTimingFunction: 'linear',
                                                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)',
                                                    animationIterationCount: 'infinite'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 722,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 721,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 717,
                                        columnNumber: 15
                                    }, this),
                                    isPlaying && !isMuted && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-24 right-5 transform-gpu flex items-end gap-0.5",
                                        style: {
                                            transform: 'translateZ(30px)'
                                        },
                                        children: [
                                            1,
                                            2,
                                            3,
                                            4,
                                            3,
                                            2,
                                            1
                                        ].map({
                                            "PortfolioSections.useCallback[renderVideoCards]": (height, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 bg-gradient-to-t from-green-500 to-green-300 rounded-t-sm animate-wave",
                                                    style: {
                                                        height: `${height * 4}px`,
                                                        animationDelay: `${i * 0.1}s`
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/components/case-studies.tsx",
                                                    lineNumber: 739,
                                                    columnNumber: 19
                                                }, this)
                                        }["PortfolioSections.useCallback[renderVideoCards]"])
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 737,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 556,
                                columnNumber: 11
                            }, this),
                            isFocused && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#1D4059]/30 via-[#2A5A7B]/25 to-transparent blur-2xl opacity-80 pointer-events-none transition-all duration-700",
                                style: {
                                    transform: 'translateZ(-15px)',
                                    animation: 'pulseGlow 3s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this),
                            isHovering && !isFocused && !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#1D4059]/15 via-[#2A5A7B]/10 to-transparent blur-xl opacity-50 pointer-events-none transition-all duration-300",
                                style: {
                                    transform: 'translateZ(-10px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 765,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-1 -left-1 w-6 h-6 border-t border-l border-white/10 rounded-tl-lg transform-gpu opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 774,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-1 -right-1 w-6 h-6 border-t border-r border-white/10 rounded-tr-lg transform-gpu opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 775,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 -left-1 w-6 h-6 border-b border-l border-white/10 rounded-bl-lg transform-gpu opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 776,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-1 -right-1 w-6 h-6 border-b border-r border-white/10 rounded-br-lg transform-gpu opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 777,
                                columnNumber: 11
                            }, this)
                        ]
                    }, card.id, true, {
                        fileName: "[project]/components/case-studies.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this);
                }
            }["PortfolioSections.useCallback[renderVideoCards]"]);
        }
    }["PortfolioSections.useCallback[renderVideoCards]"], [
        focusedCard,
        visibleCards,
        isMobile,
        isTablet,
        playingVideo,
        videoMuted,
        isHoveringVideo,
        handleVideoClick,
        handleMuteToggle,
        getCardTransform,
        getCardZIndex,
        getYouTubeEmbedUrl
    ]);
    // Tab navigation
    const tabs = [
        {
            id: "video",
            label: "Video Editing",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"]
        },
        {
            id: "web",
            label: "Web Development",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
        },
        {
            id: "marketing",
            label: "Digital Marketing",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-87e38c73c129d1e2" + " " + "relative py-2 sm:py-4 md:py-6 overflow-hidden bg-gradient-to-b from-[#EEEEEE] to-[#E0E0E0]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-87e38c73c129d1e2" + " " + "absolute inset-0 opacity-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundImage: `radial-gradient(circle at 2px 2px, #6C7A89 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                        animation: scrolling ? 'none' : 'backgroundMove 20s linear infinite'
                    },
                    className: "jsx-87e38c73c129d1e2" + " " + "absolute inset-0"
                }, void 0, false, {
                    fileName: "[project]/components/case-studies.tsx",
                    lineNumber: 794,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/case-studies.tsx",
                lineNumber: 793,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-87e38c73c129d1e2" + " " + "absolute inset-0 overflow-hidden",
                children: [
                    ...Array(8)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${Math.random() * 15 + 10}px`,
                            height: `${Math.random() * 15 + 10}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float3D ${Math.random() * 25 + 15}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: 0.3,
                            transformStyle: 'preserve-3d',
                            boxShadow: `0 0 20px rgba(163, 198, 196, 0.1)`
                        },
                        className: "jsx-87e38c73c129d1e2" + " " + "absolute rounded-full bg-gradient-to-br from-[#A3C6C4]/10 to-[#6C7A89]/5 backdrop-blur-sm"
                    }, i, false, {
                        fileName: "[project]/components/case-studies.tsx",
                        lineNumber: 807,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/case-studies.tsx",
                lineNumber: 805,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-87e38c73c129d1e2" + " " + "container mx-auto px-3 sm:px-4 md:px-5 lg:px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-87e38c73c129d1e2" + " " + "text-center max-w-3xl mx-auto mb-4 sm:mb-5 md:mb-6 transform-gpu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-87e38c73c129d1e2" + " " + "mb-1.5 sm:mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-87e38c73c129d1e2" + " " + "inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#1E425B]/15 to-[#2A5A7B]/10 text-[#1E425B] text-xs sm:text-sm font-medium border border-[#1E425B]/20 backdrop-blur-sm shadow-sm",
                                    children: "Previous Work"
                                }, void 0, false, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 829,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 828,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-87e38c73c129d1e2" + " " + "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#1E425B]/90 mb-1.5 sm:mb-2 transform-gpu",
                                children: "Case Studies & Success Stories"
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 833,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/case-studies.tsx",
                        lineNumber: 827,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-87e38c73c129d1e2" + " " + "flex justify-center mb-4 sm:mb-5 md:mb-6 px-2 transform-gpu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-87e38c73c129d1e2" + " " + "inline-flex flex-wrap justify-center gap-1 sm:gap-1.5 rounded-full p-1 bg-gradient-to-b from-white/70 to-white/50 backdrop-blur-md shadow-lg border border-[#1E425B]/20 max-w-full overflow-x-auto transform-gpu",
                            children: tabs.map((tab)=>{
                                const Icon = tab.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setActiveSection(tab.id);
                                        setVisibleCards([]);
                                        setFocusedCard(null);
                                        setPlayingVideo(null);
                                        // Pause all videos when switching sections
                                        iframeRefs.current.forEach((iframe)=>{
                                            if (iframe && iframe.contentWindow) {
                                                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                                            }
                                        });
                                    },
                                    className: "jsx-87e38c73c129d1e2" + " " + `flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 transform-gpu hover:scale-105 active:scale-95 ${activeSection === tab.id ? "bg-gradient-to-r from-[#1E425B] to-[#2A5A7B] text-white shadow-lg scale-[1.02] shadow-[#1E425B]/30" : "text-[#1E425B] hover:bg-gradient-to-r hover:from-[#1E425B]/10 hover:to-[#2A5A7B]/10"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "jsx-87e38c73c129d1e2" + " " + "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 864,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-87e38c73c129d1e2" + " " + "text-xs sm:text-sm",
                                            children: tab.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 865,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, tab.id, true, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 844,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/case-studies.tsx",
                            lineNumber: 840,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/case-studies.tsx",
                        lineNumber: 839,
                        columnNumber: 9
                    }, this),
                    activeSection === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-87e38c73c129d1e2" + " " + "text-center mb-4 sm:mb-5 md:mb-6 transform-gpu",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-87e38c73c129d1e2" + " " + "text-lg sm:text-xl font-bold text-[#1E425B] mb-1.5 bg-gradient-to-r from-[#1E425B] to-[#2A5A7B] bg-clip-text text-transparent",
                                        children: "Video Editing Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 876,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-87e38c73c129d1e2" + " " + "text-[#1E425B]/70 max-w-2xl mx-auto px-2 text-xs sm:text-sm",
                                        children: "Professional video production and editing for various industries"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 879,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 875,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: sectionRef,
                                className: "jsx-87e38c73c129d1e2" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-87e38c73c129d1e2" + " " + `flex justify-center items-center ${isMobile ? 'min-h-[400px]' : isTablet ? 'min-h-[380px]' : 'min-h-[420px]'} py-3 sm:py-4 md:py-5 overflow-x-hidden overflow-y-visible`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: containerRef,
                                            style: {
                                                height: isMobile ? '350px' : isTablet ? '350px' : '380px',
                                                width: 'max-content',
                                                transformStyle: 'preserve-3d'
                                            },
                                            className: "jsx-87e38c73c129d1e2" + " " + "relative flex items-center justify-center perspective-1000",
                                            children: renderVideoCards()
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 891,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 887,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-87e38c73c129d1e2" + " " + "text-center mt-4 px-4 transform-gpu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-87e38c73c129d1e2" + " " + "text-[#1E425B]/70 text-xs sm:text-sm bg-gradient-to-r from-[#1E425B] to-[#2A5A7B] bg-clip-text text-transparent",
                                            children: isMobile ? 'Tap a card to play video' : 'Click a card to play video'
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 906,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 905,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 886,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    activeSection === "web" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-87e38c73c129d1e2" + " " + "text-center mb-4 sm:mb-5 md:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-87e38c73c129d1e2" + " " + "text-lg sm:text-xl font-bold text-[#1E425B] mb-1.5",
                                        children: "Web Development Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 919,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-87e38c73c129d1e2" + " " + "text-[#1E425B]/70 max-w-2xl mx-auto px-2 text-xs sm:text-sm",
                                        children: "Modern web applications built with cutting-edge technologies"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 922,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 918,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: sectionRef,
                                className: "jsx-87e38c73c129d1e2" + " " + "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-3",
                                children: webDevProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-index": index,
                                        style: {
                                            transitionDelay: `${index * 80}ms`
                                        },
                                        className: "jsx-87e38c73c129d1e2" + " " + `transition-all duration-400 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                            project: project,
                                            type: "web"
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 937,
                                            columnNumber: 19
                                        }, this)
                                    }, project.id, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 929,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 927,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    activeSection === "marketing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-87e38c73c129d1e2" + " " + "text-center mb-4 sm:mb-5 md:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-87e38c73c129d1e2" + " " + "text-lg sm:text-xl font-bold text-[#1E425B] mb-1.5",
                                        children: "Digital Marketing Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 948,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-87e38c73c129d1e2" + " " + "text-[#1E425B]/70 max-w-2xl mx-auto px-2 text-xs sm:text-sm",
                                        children: "Strategic marketing campaigns driving measurable business growth"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 951,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 947,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: sectionRef,
                                className: "jsx-87e38c73c129d1e2" + " " + "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-3",
                                children: digitalMarketingProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-index": index,
                                        style: {
                                            transitionDelay: `${index * 80}ms`
                                        },
                                        className: "jsx-87e38c73c129d1e2" + " " + `transition-all duration-400 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                            project: project,
                                            type: "marketing"
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 966,
                                            columnNumber: 19
                                        }, this)
                                    }, project.id, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 958,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 956,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/case-studies.tsx",
                lineNumber: 825,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "87e38c73c129d1e2",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes scaleIn{0%{opacity:0;transform:scale(.95)translateZ(-50px)}to{opacity:1;transform:scale(1)translateZ(0)}}@keyframes float{0%,to{transform:translateY(0)translate(0)rotate(0)}25%{transform:translateY(-15px)translate(8px)rotate(2deg)}50%{transform:translateY(-25px)translate(-8px)rotate(-1deg)}75%{transform:translateY(-15px)translate(-15px)rotate(1deg)}}@keyframes float3D{0%,to{transform:translateY(0)translate(0)translateZ(0)rotate(0)}33%{transform:translateY(-20px)translate(10px)translateZ(10px)rotate(120deg)}66%{transform:translateY(-30px)translate(-10px)translateZ(5px)rotate(240deg)}}@keyframes backgroundMove{0%{background-position:0 0}to{background-position:40px 40px}}@keyframes progress{0%{width:0%}to{width:100%}}@keyframes pulseGlow{0%,to{opacity:.7;transform:translateZ(-10px)scale(1)}50%{opacity:.9;transform:translateZ(-10px)scale(1.05)}}@keyframes wave{0%,to{transform:scaleY(1)}50%{transform:scaleY(2)}}.animate-fadeIn.jsx-87e38c73c129d1e2{animation:.3s cubic-bezier(.2,.85,.3,1.05) forwards fadeIn}.animate-scaleIn.jsx-87e38c73c129d1e2{animation:.4s cubic-bezier(.2,.85,.3,1.05) forwards scaleIn}.animate-progress.jsx-87e38c73c129d1e2{animation:linear infinite progress}.animate-wave.jsx-87e38c73c129d1e2{animation:.5s ease-in-out infinite wave}.perspective-1000.jsx-87e38c73c129d1e2{perspective:1000px}.perspective-1500.jsx-87e38c73c129d1e2{perspective:1500px}.transform-gpu.jsx-87e38c73c129d1e2{backfaceVisibility:hidden;transform:translateZ(0)}.line-clamp-1.jsx-87e38c73c129d1e2{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-2.jsx-87e38c73c129d1e2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}@media (prefers-reduced-motion:reduce){.transition-all.jsx-87e38c73c129d1e2,.animate-fadeIn.jsx-87e38c73c129d1e2,.animate-scaleIn.jsx-87e38c73c129d1e2,.animate-pulse.jsx-87e38c73c129d1e2,.animate-ping.jsx-87e38c73c129d1e2,.animate-progress.jsx-87e38c73c129d1e2,.animate-wave.jsx-87e38c73c129d1e2{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}@media (width<=640px){button.jsx-87e38c73c129d1e2,[role=button].jsx-87e38c73c129d1e2{min-width:44px;min-height:44px}.container.jsx-87e38c73c129d1e2{padding-left:.75rem;padding-right:.75rem}.perspective-1000.jsx-87e38c73c129d1e2{perspective:800px}}@media (width<=360px){.absolute.jsx-87e38c73c129d1e2{width:80vw!important;height:100vw!important;margin-left:-40vw!important}}@media (height<=600px) and (orientation:landscape){.min-h-screen.jsx-87e38c73c129d1e2{min-height:auto}.flex.justify-center.items-center.jsx-87e38c73c129d1e2{min-height:320px!important}}.jsx-87e38c73c129d1e2{scroll-behavior:smooth}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/case-studies.tsx",
        lineNumber: 791,
        columnNumber: 5
    }, this);
}
_s(PortfolioSections, "VGn9gyf/OPRPU5ev3yxcATxPyZg=");
_c = PortfolioSections;
// Project Card Component for Web Dev and Marketing sections - REMAINS EXACTLY THE SAME
function ProjectCard({ project, type }) {
    const Icon = type === 'web' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"];
    const handleCardClick = (e)=>{
        if (type !== 'marketing' && project.liveLink) {
            e.preventDefault();
            window.open(project.liveLink, '_blank', 'noopener,noreferrer');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group h-full transform-gpu",
        onClick: handleCardClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1E425B]/20 hover:border-[#1E425B]/40 active:scale-[0.98] cursor-pointer transform-gpu hover:translateY(-4px)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: project.image,
                    alt: project.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu",
                    loading: "lazy",
                    decoding: "async"
                }, void 0, false, {
                    fileName: "[project]/components/case-studies.tsx",
                    lineNumber: 1164,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-[#1E425B] via-[#1E425B]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
                }, void 0, false, {
                    fileName: "[project]/components/case-studies.tsx",
                    lineNumber: 1171,
                    columnNumber: 9
                }, this),
                type !== 'marketing' && project.liveLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 right-2 transform-gpu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/20 backdrop-blur-md text-green-500 text-xs font-medium border border-green-500/30 flex items-center gap-1 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "w-2 h-2"
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 1177,
                                columnNumber: 15
                            }, this),
                            "Live"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/case-studies.tsx",
                        lineNumber: 1176,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/case-studies.tsx",
                    lineNumber: 1175,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 left-2 right-2 flex flex-wrap gap-1",
                    children: [
                        project.technologies.slice(0, 2).map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 rounded-full bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md text-white text-xs font-medium border border-white/30 shadow-sm",
                                children: tech
                            }, i, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 1186,
                                columnNumber: 13
                            }, this)),
                        project.technologies.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 rounded-full bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md text-white text-xs font-medium border border-white/30 shadow-sm",
                            children: [
                                "+",
                                project.technologies.length - 2
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/case-studies.tsx",
                            lineNumber: 1194,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/case-studies.tsx",
                    lineNumber: 1184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white transform-gpu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 1202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm sm:text-base font-bold truncate bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 1203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/case-studies.tsx",
                            lineNumber: 1201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-1 sm:gap-1.5 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-2 h-2 sm:w-2.5 sm:h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 1210,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: project.duration
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 1209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-2 h-2 sm:w-2.5 sm:h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "truncate",
                                            children: project.teamSize
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 1213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/case-studies.tsx",
                            lineNumber: 1208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white/80 mb-2 sm:mb-2.5 line-clamp-2",
                            children: project.description
                        }, void 0, false, {
                            fileName: "[project]/components/case-studies.tsx",
                            lineNumber: 1219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs px-2 py-1 rounded bg-gradient-to-r from-[#1E425B]/40 to-[#2A5A7B]/30 border border-[#1E425B]/50 truncate max-w-[60%] backdrop-blur-sm",
                                    children: project.stats
                                }, void 0, false, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 1224,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs flex items-center gap-1 text-white/70 hover:text-white transition-colors flex-shrink-0 group-hover:translate-x-1 transition-transform",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "View ",
                                                type !== 'marketing' && project.liveLink ? 'Live' : 'Details'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 1228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "w-2 h-2 sm:w-2.5 sm:h-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/case-studies.tsx",
                                            lineNumber: 1229,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 1227,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/case-studies.tsx",
                            lineNumber: 1223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/case-studies.tsx",
                    lineNumber: 1200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 backdrop-blur-md bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform-gpu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex flex-col justify-between p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-white text-lg font-bold mb-4",
                                        children: "Project Details"
                                    }, void 0, false, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 1238,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "text-white text-sm font-semibold mb-1",
                                                children: "Client:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 1243,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/90 text-sm",
                                                children: project.client
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 1244,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 1242,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "text-white text-sm font-semibold mb-1",
                                                children: "Results:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 1248,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/90 text-sm",
                                                children: project.results
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 1249,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 1247,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "text-white text-sm font-semibold mb-2",
                                                children: "Features:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 1253,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: project.features.slice(0, 3).map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs backdrop-blur-sm border border-white/20",
                                                        children: feature
                                                    }, i, false, {
                                                        fileName: "[project]/components/case-studies.tsx",
                                                        lineNumber: 1256,
                                                        columnNumber: 13
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 1254,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/case-studies.tsx",
                                        lineNumber: 1252,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 1237,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-3 rounded-lg bg-white text-[#1E425B] text-sm font-bold hover:bg-white/90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2",
                                    children: type !== 'marketing' && project.liveLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 1271,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Visit Live Website"
                                            }, void 0, false, {
                                                fileName: "[project]/components/case-studies.tsx",
                                                lineNumber: 1272,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true) : 'View Full Case Study'
                                }, void 0, false, {
                                    fileName: "[project]/components/case-studies.tsx",
                                    lineNumber: 1268,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/case-studies.tsx",
                                lineNumber: 1267,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/case-studies.tsx",
                        lineNumber: 1236,
                        columnNumber: 3
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/case-studies.tsx",
                    lineNumber: 1235,
                    columnNumber: 8
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/case-studies.tsx",
            lineNumber: 1163,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/case-studies.tsx",
        lineNumber: 1162,
        columnNumber: 5
    }, this);
}
_c1 = ProjectCard;
// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
var _c, _c1;
__turbopack_context__.k.register(_c, "PortfolioSections");
__turbopack_context__.k.register(_c1, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/process-timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding your goals and target audience",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        number: "02",
        title: "Design",
        description: "Creating wireframes and visual mockups",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    },
    {
        number: "03",
        title: "Development",
        description: "Building your solution with cutting-edge tech",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
    },
    {
        number: "04",
        title: "Testing",
        description: "Rigorous QA and performance optimization",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    {
        number: "05",
        title: "Launch",
        description: "Go-live and ongoing support",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
    }
];
function ProcessTimeline() {
    _s();
    const [visibleSteps, setVisibleSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Array(steps.length).fill(false));
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoveredStep, setHoveredStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProcessTimeline.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ProcessTimeline.useEffect": (entries)=>{
                    entries.forEach({
                        "ProcessTimeline.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const index = Number.parseInt(entry.target.getAttribute("data-index") || "0");
                                setVisibleSteps({
                                    "ProcessTimeline.useEffect": (prev)=>{
                                        const newVisible = [
                                            ...prev
                                        ];
                                        newVisible[index] = true;
                                        return newVisible;
                                    }
                                }["ProcessTimeline.useEffect"]);
                            }
                        }
                    }["ProcessTimeline.useEffect"]);
                }
            }["ProcessTimeline.useEffect"], {
                threshold: 0.2
            });
            if (containerRef.current) {
                containerRef.current.querySelectorAll("[data-index]").forEach({
                    "ProcessTimeline.useEffect": (el)=>observer.observe(el)
                }["ProcessTimeline.useEffect"]);
            }
            return ({
                "ProcessTimeline.useEffect": ()=>observer.disconnect()
            })["ProcessTimeline.useEffect"];
        }
    }["ProcessTimeline.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "jsx-3b99ec8f78021521" + " " + "relative py-16 md:py-20 lg:py-24 overflow-hidden bg-[#EEEEEE]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b99ec8f78021521" + " " + "absolute inset-0 overflow-hidden",
                children: [
                    [
                        ...Array(15)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: `${Math.random() * 6 + 2}px`,
                                height: `${Math.random() * 6 + 2}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animation: `float ${Math.random() * 8 + 6}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 2}s`
                            },
                            className: "jsx-3b99ec8f78021521" + " " + "absolute rounded-full bg-[#1C3F57]/5"
                        }, i, false, {
                            fileName: "[project]/components/process-timeline.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#1C3F57]/5 to-transparent rounded-full blur-3xl animate-blob"
                    }, void 0, false, {
                        fileName: "[project]/components/process-timeline.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-[#1C3F57]/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"
                    }, void 0, false, {
                        fileName: "[project]/components/process-timeline.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#1C3F57]/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000"
                    }, void 0, false, {
                        fileName: "[project]/components/process-timeline.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/process-timeline.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b99ec8f78021521" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "text-center mb-12 md:mb-16 lg:mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b99ec8f78021521" + " " + "inline-block mb-4 animate-fade-up",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3b99ec8f78021521" + " " + "inline-block px-4 py-2 rounded-full bg-[#1C3F57]/10 text-[#1C3F57] text-sm font-semibold border border-[#1C3F57]/20 backdrop-blur-sm",
                                    children: "How We Work"
                                }, void 0, false, {
                                    fileName: "[project]/components/process-timeline.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/process-timeline.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-3b99ec8f78021521" + " " + "text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C3F57] mb-4 animate-fade-up animation-delay-100",
                                children: "Our Development Process"
                            }, void 0, false, {
                                fileName: "[project]/components/process-timeline.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-3b99ec8f78021521" + " " + "text-base md:text-lg text-[#1C3F57]/80 max-w-2xl mx-auto animate-fade-up animation-delay-200",
                                children: "A structured approach to deliver exceptional results on time."
                            }, void 0, false, {
                                fileName: "[project]/components/process-timeline.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/process-timeline.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b99ec8f78021521" + " " + "hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3b99ec8f78021521" + " " + "relative h-0.5 bg-gradient-to-r from-transparent via-[#1C3F57]/20 to-transparent overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b99ec8f78021521" + " " + "absolute inset-0 bg-gradient-to-r from-[#1C3F57]/0 via-[#1C3F57]/40 to-[#1C3F57]/0 animate-shimmer"
                                        }, void 0, false, {
                                            fileName: "[project]/components/process-timeline.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/process-timeline.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        ...Array(8)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                left: `${(i + 1) * 12.5}%`,
                                                animationDelay: `${i * 0.3}s`
                                            },
                                            className: "jsx-3b99ec8f78021521" + " " + "absolute top-1/2 w-2 h-2 rounded-full bg-[#1C3F57] transform -translate-y-1/2 animate-pulse"
                                        }, i, false, {
                                            fileName: "[project]/components/process-timeline.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/process-timeline.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b99ec8f78021521" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8",
                                children: steps.map((step, index)=>{
                                    const IconComponent = step.icon;
                                    const isHovered = hoveredStep === index;
                                    const isVisible = visibleSteps[index];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-index": index,
                                        onMouseEnter: ()=>setHoveredStep(index),
                                        onMouseLeave: ()=>setHoveredStep(null),
                                        style: {
                                            transitionDelay: `${index * 150}ms`
                                        },
                                        className: "jsx-3b99ec8f78021521" + " " + `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b99ec8f78021521" + " " + "flex flex-col items-center text-center p-4 md:p-6 rounded-2xl group cursor-pointer transition-all duration-500 hover:bg-white/80 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2 border border-transparent hover:border-[#1C3F57]/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b99ec8f78021521" + " " + "relative z-10 mb-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-3b99ec8f78021521" + " " + "relative",
                                                            children: [
                                                                isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + "absolute inset-0 w-20 h-20 rounded-full bg-[#1C3F57]/20 blur-xl animate-ping-slow"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/process-timeline.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + `absolute inset-0 w-20 h-20 rounded-full border-2 border-[#1C3F57]/20 ${isHovered ? 'animate-spin-slow' : ''}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/process-timeline.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + `relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-gradient-to-br from-[#1C3F57] to-[#2A5A7B] scale-110 shadow-lg shadow-[#1C3F57]/30' : 'bg-gradient-to-br from-[#1C3F57]/90 to-[#1C3F57]/70 shadow-md'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                        size: 26,
                                                                        className: "jsx-3b99ec8f78021521" + " " + `transition-all duration-500 ${isHovered ? 'text-white scale-110' : 'text-white/90'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/process-timeline.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/process-timeline.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + `absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-gradient-to-br from-[#1C3F57] to-[#2A5A7B] scale-110 shadow-lg' : 'bg-[#1C3F57] shadow'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-3b99ec8f78021521" + " " + "text-xs font-bold text-white animate-bounce-in",
                                                                        children: step.number
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/process-timeline.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/process-timeline.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/process-timeline.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/process-timeline.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b99ec8f78021521" + " " + "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-3b99ec8f78021521" + " " + `text-lg md:text-xl font-bold transition-all duration-500 ${isHovered ? 'text-[#1C3F57] scale-105' : 'text-[#1C3F57]'}`,
                                                                children: step.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/process-timeline.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-3b99ec8f78021521" + " " + "relative w-12 h-0.5 bg-gradient-to-r from-transparent via-[#1C3F57] to-transparent mx-auto overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + `absolute inset-0 bg-gradient-to-r from-[#1C3F57] via-white to-[#1C3F57] animate-shimmer ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/process-timeline.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/process-timeline.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-3b99ec8f78021521" + " " + "text-sm md:text-base text-[#1C3F57]/70 transition-all duration-500 group-hover:text-[#1C3F57]/90",
                                                                children: step.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/process-timeline.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/process-timeline.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b99ec8f78021521" + " " + "lg:hidden absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-[#1C3F57]/30 to-transparent transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/process-timeline.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/process-timeline.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this),
                                            index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b99ec8f78021521" + " " + "md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#1C3F57]/20 to-transparent transform -translate-x-1/2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/process-timeline.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b99ec8f78021521" + " " + "hidden md:block lg:hidden absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-[#1C3F57]/20 to-transparent transform -translate-y-1/2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/process-timeline.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/components/process-timeline.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/process-timeline.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b99ec8f78021521" + " " + "text-center mt-12 md:mt-16 lg:mt-20 animate-fade-up animation-delay-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b99ec8f78021521" + " " + "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1C3F57]/10 to-[#1C3F57]/5 border border-[#1C3F57]/20 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1C3F57]/15 hover:to-[#1C3F57]/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3b99ec8f78021521" + " " + "text-[#1C3F57] font-semibold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/get-started",
                                                className: "jsx-3b99ec8f78021521",
                                                children: "Ready to start your project?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/process-timeline.tsx",
                                                lineNumber: 227,
                                                columnNumber: 62
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/process-timeline.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b99ec8f78021521" + " " + "relative w-6 h-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-3b99ec8f78021521" + " " + "absolute inset-0 bg-[#1C3F57] rounded-full animate-ping opacity-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/process-timeline.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                    className: "relative w-6 h-6 text-[#1C3F57] group-hover:animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/process-timeline.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/process-timeline.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/process-timeline.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/process-timeline.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/process-timeline.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/process-timeline.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3b99ec8f78021521",
                children: "@keyframes float{0%,to{transform:translateY(0)translate(0)}25%{transform:translateY(-10px)translate(5px)}50%{transform:translateY(-20px)translate(-5px)}75%{transform:translateY(-10px)translate(-10px)}}@keyframes fade-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes blob{0%,to{transform:translate(0)scale(1)}33%{transform:translate(30px,-30px)scale(1.1)}66%{transform:translate(-20px,20px)scale(.9)}}@keyframes shimmer{0%{transform:translate(-100%)}to{transform:translate(100%)}}@keyframes spin-slow{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes ping-slow{0%{opacity:.8;transform:scale(.8)}70%,to{opacity:0;transform:scale(1.5)}}@keyframes bounce-in{0%{opacity:0;transform:scale(.3)}50%{transform:scale(1.05)}70%{transform:scale(.9)}to{opacity:1;transform:scale(1)}}.animate-float.jsx-3b99ec8f78021521{animation:6s ease-in-out infinite float}.animate-fade-up.jsx-3b99ec8f78021521{animation:.8s ease-out forwards fade-up}.animate-blob.jsx-3b99ec8f78021521{animation:7s infinite blob}.animate-shimmer.jsx-3b99ec8f78021521{animation:2s linear infinite shimmer}.animate-spin-slow.jsx-3b99ec8f78021521{animation:3s linear infinite spin-slow}.animate-ping-slow.jsx-3b99ec8f78021521{animation:2s cubic-bezier(0,0,.2,1) infinite ping-slow}.animate-bounce-in.jsx-3b99ec8f78021521{animation:.6s cubic-bezier(.68,-.55,.265,1.55) forwards bounce-in}.animation-delay-100.jsx-3b99ec8f78021521{animation-delay:.1s}.animation-delay-200.jsx-3b99ec8f78021521{animation-delay:.2s}.animation-delay-2000.jsx-3b99ec8f78021521{animation-delay:2s}.animation-delay-4000.jsx-3b99ec8f78021521{animation-delay:4s}.animation-delay-700.jsx-3b99ec8f78021521{animation-delay:.7s}@media (prefers-reduced-motion:reduce){.animate-float.jsx-3b99ec8f78021521,.animate-fade-up.jsx-3b99ec8f78021521,.animate-blob.jsx-3b99ec8f78021521,.animate-shimmer.jsx-3b99ec8f78021521,.animate-spin-slow.jsx-3b99ec8f78021521,.animate-ping-slow.jsx-3b99ec8f78021521,.animate-bounce-in.jsx-3b99ec8f78021521{animation:none!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/process-timeline.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(ProcessTimeline, "itByJRMuufBwUOm0mmb31J1e/zA=");
_c = ProcessTimeline;
var _c;
__turbopack_context__.k.register(_c, "ProcessTimeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const testimonials = [
    {
        name: "Oly Martin",
        designation: "Content Creator",
        text: "Excellent video editing service. The final videos were high quality, engaging, and delivered on time. Very happy with the results.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
        name: "Janna Wemple",
        designation: "Content Creator",
        text: "Great vlog editing service. Clean cuts, smooth flow, and delivered on time.Very happy with the results",
        rating: 5,
        image: "/jenna.jpg"
    },
    {
        name: "Adnan Khan",
        designation: "CEO , BMGulf Travel",
        text: "Excellent experience working with this team.BMGulf Travel website is fast,user-friendly, & SEO-optimized,",
        rating: 5,
        image: "/adnan.png"
    },
    {
        name: "Sarah Johnson",
        designation: "Product Manager",
        text: "Excellent digital marketing support. Our traffic and leads improved within weeks.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
        name: "Ahmad Mauz",
        designation: "Business Owner",
        text: "Great experience working with team. They delivered a professional, fast,& well designed website that perfectly matches my business needs.",
        rating: 5,
        image: "/muaz.jpg"
    },
    {
        name: "Tom Fleay",
        designation: "Content Creator",
        text: "Amazing video editing service. Smooth transitions, clean cuts, and fast delivery.",
        rating: 5,
        image: "https://images.unsphjlash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop"
    }
];
function Testimonials() {
    _s();
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Array(testimonials.length).fill(false));
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTablet, setIsTablet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            const handleResize = {
                "Testimonials.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth < 768);
                    setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
                }
            }["Testimonials.useEffect.handleResize"];
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "Testimonials.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Testimonials.useEffect": (entries)=>{
                    entries.forEach({
                        "Testimonials.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const index = Number.parseInt(entry.target.getAttribute("data-index") || "0");
                                setTimeout({
                                    "Testimonials.useEffect": ()=>{
                                        setVisibleCards({
                                            "Testimonials.useEffect": (prev)=>{
                                                const newVisible = [
                                                    ...prev
                                                ];
                                                newVisible[index] = true;
                                                return newVisible;
                                            }
                                        }["Testimonials.useEffect"]);
                                    }
                                }["Testimonials.useEffect"], index * 150);
                            }
                        }
                    }["Testimonials.useEffect"]);
                }
            }["Testimonials.useEffect"], {
                threshold: 0.1
            });
            if (containerRef.current) {
                containerRef.current.querySelectorAll("[data-index]").forEach({
                    "Testimonials.useEffect": (el)=>observer.observe(el)
                }["Testimonials.useEffect"]);
            }
            return ({
                "Testimonials.useEffect": ()=>observer.disconnect()
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
            const interval = setInterval({
                "Testimonials.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "Testimonials.useEffect.interval": (prev)=>{
                            const nextIndex = prev + 1;
                            return nextIndex >= testimonials.length - (cardsToShow - 1) ? 0 : nextIndex;
                        }
                    }["Testimonials.useEffect.interval"]);
                }
            }["Testimonials.useEffect.interval"], 4000);
            return ({
                "Testimonials.useEffect": ()=>clearInterval(interval)
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], [
        isMobile,
        isTablet
    ]);
    const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;
    const cardWidth = 100 / cardsToShow;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-12 md:py-16 lg:py-20",
        style: {
            backgroundColor: '#EEEEEE'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8 md:mb-12 lg:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E425C] mb-2",
                            children: "Clients Reviews"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-base md:text-lg mt-4 px-4",
                            children: "What our satisfied clients have to say about us"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "max-w-7xl mx-auto relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex transition-transform duration-700 ease-in-out",
                                style: {
                                    transform: `translateX(-${currentIndex * cardWidth}%)`
                                },
                                children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-index": index,
                                        className: "flex-shrink-0 px-2 md:px-3 lg:px-4",
                                        style: {
                                            width: `${cardWidth}%`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative mx-auto",
                                            style: {
                                                width: isMobile ? '280px' : '320px',
                                                height: isMobile ? '280px' : '320px',
                                                maxWidth: '100%'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute",
                                                    style: {
                                                        top: isMobile ? '15px' : '20px',
                                                        left: isMobile ? '15px' : '20px',
                                                        zIndex: 20
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-full overflow-hidden border-4 flex items-center justify-center",
                                                            style: {
                                                                width: isMobile ? '60px' : '70px',
                                                                height: isMobile ? '60px' : '70px',
                                                                borderColor: '#1C3E56',
                                                                backgroundColor: '#EAEBEB'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: testimonial.image,
                                                                    alt: testimonial.name,
                                                                    className: "w-full h-full object-cover",
                                                                    onError: (e)=>{
                                                                        e.currentTarget.style.display = 'none';
                                                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/testimonials.tsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "hidden",
                                                                    width: "30",
                                                                    height: "30",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: "12",
                                                                            cy: "8",
                                                                            r: "4",
                                                                            fill: "#1C3E56"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/testimonials.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M4 20c0-4 3.6-6 8-6s8 2 8 6",
                                                                            fill: "#1C3E56"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/testimonials.tsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/testimonials.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/testimonials.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            style: {
                                                                position: 'absolute',
                                                                top: isMobile ? '30px' : '35px',
                                                                left: isMobile ? '60px' : '70px',
                                                                zIndex: 1
                                                            },
                                                            width: isMobile ? '60' : '70',
                                                            height: isMobile ? '90' : '100',
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: isMobile ? "M 0 0 Q 30 45 60 90" : "M 0 0 Q 35 50 70 100",
                                                                stroke: "#1C3E56",
                                                                strokeWidth: "2",
                                                                strokeDasharray: "6,6",
                                                                fill: "none",
                                                                opacity: "0.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/testimonials.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/testimonials.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute rounded-full flex items-center justify-center",
                                                    style: {
                                                        width: isMobile ? '240px' : '280px',
                                                        height: isMobile ? '240px' : '280px',
                                                        top: isMobile ? '35px' : '40px',
                                                        left: isMobile ? '35px' : '40px',
                                                        background: '#1C3E56',
                                                        border: isMobile ? '5px solid #1C3E56' : '6px solid #1C3E56',
                                                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-full flex flex-col items-center justify-center px-6 md:px-8 py-4 md:py-6 text-center relative",
                                                        style: {
                                                            width: isMobile ? '220px' : '260px',
                                                            height: isMobile ? '220px' : '260px',
                                                            backgroundColor: '#EAEBEB'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-2 md:mb-3",
                                                                style: {
                                                                    color: '#052135ff',
                                                                    opacity: 0.2
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: isMobile ? '28' : '35',
                                                                    height: isMobile ? '28' : '35',
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/testimonials.tsx",
                                                                        lineNumber: 224,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/testimonials.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: `font-bold mb-1 ${isMobile ? 'text-base' : 'text-lg'}`,
                                                                style: {
                                                                    color: '#1C3E56'
                                                                },
                                                                children: testimonial.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs mb-2 md:mb-3",
                                                                style: {
                                                                    color: '#1C3E56',
                                                                    opacity: 0.7
                                                                },
                                                                children: testimonial.designation
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1 mb-2 md:mb-3",
                                                                children: Array.from({
                                                                    length: 5
                                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        size: isMobile ? 12 : 14,
                                                                        className: "text-[#1C3E56]",
                                                                        fill: i < testimonial.rating ? "#d69e02ff" : "none",
                                                                        strokeWidth: 1.5,
                                                                        opacity: i < testimonial.rating ? 1 : 0.3
                                                                    }, i, false, {
                                                                        fileName: "[project]/components/testimonials.tsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `leading-relaxed ${isMobile ? 'text-[10px]' : 'text-xs'}`,
                                                                style: {
                                                                    color: '#092840ff',
                                                                    opacity: 0.8
                                                                },
                                                                children: testimonial.text
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/testimonials.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/testimonials.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute rounded-full",
                                                    style: {
                                                        width: isMobile ? '260px' : '300px',
                                                        height: isMobile ? '260px' : '300px',
                                                        top: isMobile ? '8px' : '10px',
                                                        left: isMobile ? '8px' : '10px',
                                                        border: isMobile ? '3px solid #1C3E56' : '4px solid #1C3E56',
                                                        opacity: 0.25
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/testimonials.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/testimonials.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/components/testimonials.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/testimonials.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-2 mt-6 md:mt-8",
                            children: Array.from({
                                length: testimonials.length - (cardsToShow - 1)
                            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentIndex(index),
                                    className: "transition-all duration-300",
                                    style: {
                                        width: currentIndex === index ? isMobile ? '24px' : '28px' : isMobile ? '8px' : '10px',
                                        height: isMobile ? '8px' : '10px',
                                        borderRadius: '5px',
                                        backgroundColor: '#0f2433ff',
                                        opacity: currentIndex === index ? 1 : 0.3
                                    }
                                }, index, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/testimonials.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/testimonials.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/testimonials.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "Ixy4C/aT5qJuFk8pc90KG0VaTTE=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/cta-banner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTABanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function CTABanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-2 md:py-2 lg:py-12",
        style: {
            backgroundColor: '#EEEEEE'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-4 md:mx-4 lg:mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-2xl md:rounded-3xl",
                        style: {
                            background: '#2a4c6fff',
                            transform: 'translate(8px, 8px)',
                            zIndex: 1
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/cta-banner.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-2xl md:rounded-3xl",
                        style: {
                            background: '#0f2438',
                            transform: 'translate(4px, 4px)',
                            zIndex: 2
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/cta-banner.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden",
                        style: {
                            background: 'linear-gradient(135deg, #1E425C 0%, #2A5270 100%)',
                            zIndex: 3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-white/5 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/components/cta-banner.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full blur-3xl"
                            }, void 0, false, {
                                fileName: "[project]/components/cta-banner.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6",
                                        children: "Ready to transform your business?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cta-banner.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed",
                                        children: "Our experts are ready to help your business grow. Schedule a free consultation today."
                                    }, void 0, false, {
                                        fileName: "[project]/components/cta-banner.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/get-started",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#A3C6C4] text-[#354649] font-semibold hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105",
                                                children: "Start Your Project"
                                            }, void 0, false, {
                                                fileName: "[project]/components/cta-banner.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/cta-banner.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/cta-banner.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cta-banner.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cta-banner.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cta-banner.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/cta-banner.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cta-banner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = CTABanner;
var _c;
__turbopack_context__.k.register(_c, "CTABanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Footer() {
    _s();
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showThankYou, setShowThankYou] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubscribe = (e)=>{
        e.preventDefault();
        if (email) {
            setShowThankYou(true);
            setEmail("");
            setTimeout(()=>setShowThankYou(false), 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative overflow-hidden",
        style: {
            backgroundColor: '#21445F'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 1440 120",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z",
                        fill: "#EEEEEE",
                        fillOpacity: "0.3"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-white/20",
                        children: showThankYou ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-white mb-2",
                                    children: "Thank You! 🎉"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/90",
                                    children: "You've successfully subscribed to our newsletter."
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-2 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl md:text-3xl font-bold text-white mb-2",
                                            children: "Stay Updated"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/90",
                                            children: "Subscribe to our newsletter for latest updates."
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubscribe,
                                    className: "flex flex-col sm:flex-row gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "Enter your email",
                                            required: true,
                                            className: "flex-1 px-5 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-6 py-3 rounded-full bg-white text-[#21445F] font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group",
                                            children: [
                                                "Subscribe",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 16,
                                                    className: "group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white mb-3",
                                        children: "Drople"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-sm leading-relaxed mb-4",
                                        children: "Building digital solutions that drive growth and create lasting impact for businesses worldwide."
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.linkedin.com/in/username",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 5
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 82,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://twitter.com/username",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 5
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 85,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.instagram.com/username",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 5
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 88,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.facebook.com/drople11",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 5
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 91,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.youtube.com/@drople-d4z",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#21445F] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 5
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 81,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services/web-development",
                                                    className: "text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 14,
                                                            className: "group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Web Development"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services/digital-marketing",
                                                    className: "text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 14,
                                                            className: "group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Digital Marketing"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services/video-editing",
                                                    className: "text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 14,
                                                            className: "group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Video Editing"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/about",
                                                    className: "text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 14,
                                                            className: "group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this),
                                                        "About Us"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/get-started",
                                                    className: "text-white text-sm hover:text-white/80 transition-colors flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 14,
                                                            className: "group-hover:translate-x-1 transition-transform"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Contact"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Get in Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:drople81@gmail.com",
                                                className: "flex items-start gap-2 text-white text-sm hover:text-white/80 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-white/70",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/footer.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: "drople81@gmail.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/footer.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+1234567890",
                                                className: "flex items-start gap-2 text-white text-sm hover:text-white/80 transition-colors group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-white/70",
                                                                children: "Phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/footer.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: "+923470458847"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/footer.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-2 text-white text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-white/70",
                                                                children: "Address"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/footer.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium",
                                                                children: "Pakistan Rawalpindi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/footer.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 173,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-sm",
                                children: [
                                    "© ",
                                    currentYear,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Drople"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 192,
                                        columnNumber: 26
                                    }, this),
                                    ". All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 191,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-6 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/privacypolicy",
                                        className: "text-white hover:text-white/80 transition-colors",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 196,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/terms",
                                        className: "text-white hover:text-white/80 transition-colors",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 199,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/cookies",
                                        className: "text-white hover:text-white/80 transition-colors",
                                        children: "Cookie Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 202,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 195,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 190,
                        columnNumber: 8
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Footer, "YYBvwT03TnwsHG48wUzi0XlZOPU=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$services$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/services-overview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$case$2d$studies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/case-studies.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$process$2d$timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/process-timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/testimonials.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cta$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cta-banner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setIsLoaded(true);
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$services$2d$overview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$case$2d$studies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$process$2d$timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cta$2d$banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Home, "e/1lVN3R6kIvuSIAmUIHNmZXQsc=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_10ace49b._.js.map