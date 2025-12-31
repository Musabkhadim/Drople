module.exports = [
"[project]/components/process-timeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
"use client";
;
;
;
;
const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding your goals and target audience",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        number: "02",
        title: "Design",
        description: "Creating wireframes and visual mockups",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    },
    {
        number: "03",
        title: "Development",
        description: "Building your solution with cutting-edge tech",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
    },
    {
        number: "04",
        title: "Testing",
        description: "Rigorous QA and performance optimization",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    {
        number: "05",
        title: "Launch",
        description: "Go-live and ongoing support",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
    }
];
function ProcessTimeline() {
    const [visibleSteps, setVisibleSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Array(steps.length).fill(false));
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoveredStep, setHoveredStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const index = Number.parseInt(entry.target.getAttribute("data-index") || "0");
                    setVisibleSteps((prev)=>{
                        const newVisible = [
                            ...prev
                        ];
                        newVisible[index] = true;
                        return newVisible;
                    });
                }
            });
        }, {
            threshold: 0.2
        });
        if (containerRef.current) {
            containerRef.current.querySelectorAll("[data-index]").forEach((el)=>observer.observe(el));
        }
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "jsx-3b99ec8f78021521" + " " + "relative py-16 md:py-20 lg:py-24 overflow-hidden bg-[#EEEEEE]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b99ec8f78021521" + " " + "absolute inset-0 overflow-hidden",
                children: [
                    [
                        ...Array(15)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#1C3F57]/5 to-transparent rounded-full blur-3xl animate-blob"
                    }, void 0, false, {
                        fileName: "[project]/components/process-timeline.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-[#1C3F57]/5 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000"
                    }, void 0, false, {
                        fileName: "[project]/components/process-timeline.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b99ec8f78021521" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "text-center mb-12 md:mb-16 lg:mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b99ec8f78021521" + " " + "inline-block mb-4 animate-fade-up",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-3b99ec8f78021521" + " " + "text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C3F57] mb-4 animate-fade-up animation-delay-100",
                                children: "Our Development Process"
                            }, void 0, false, {
                                fileName: "[project]/components/process-timeline.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b99ec8f78021521" + " " + "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b99ec8f78021521" + " " + "hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3b99ec8f78021521" + " " + "relative h-0.5 bg-gradient-to-r from-transparent via-[#1C3F57]/20 to-transparent overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b99ec8f78021521" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8",
                                children: steps.map((step, index)=>{
                                    const IconComponent = step.icon;
                                    const isHovered = hoveredStep === index;
                                    const isVisible = visibleSteps[index];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-index": index,
                                        onMouseEnter: ()=>setHoveredStep(index),
                                        onMouseLeave: ()=>setHoveredStep(null),
                                        style: {
                                            transitionDelay: `${index * 150}ms`
                                        },
                                        className: "jsx-3b99ec8f78021521" + " " + `relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b99ec8f78021521" + " " + "flex flex-col items-center text-center p-4 md:p-6 rounded-2xl group cursor-pointer transition-all duration-500 hover:bg-white/80 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2 border border-transparent hover:border-[#1C3F57]/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b99ec8f78021521" + " " + "relative z-10 mb-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-3b99ec8f78021521" + " " + "relative",
                                                            children: [
                                                                isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + "absolute inset-0 w-20 h-20 rounded-full bg-[#1C3F57]/20 blur-xl animate-ping-slow"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/process-timeline.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + `absolute inset-0 w-20 h-20 rounded-full border-2 border-[#1C3F57]/20 ${isHovered ? 'animate-spin-slow' : ''}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/process-timeline.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + `relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-gradient-to-br from-[#1C3F57] to-[#2A5A7B] scale-110 shadow-lg shadow-[#1C3F57]/30' : 'bg-gradient-to-br from-[#1C3F57]/90 to-[#1C3F57]/70 shadow-md'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-3b99ec8f78021521" + " " + `absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-gradient-to-br from-[#1C3F57] to-[#2A5A7B] scale-110 shadow-lg' : 'bg-[#1C3F57] shadow'}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b99ec8f78021521" + " " + "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "jsx-3b99ec8f78021521" + " " + `text-lg md:text-xl font-bold transition-all duration-500 ${isHovered ? 'text-[#1C3F57] scale-105' : 'text-[#1C3F57]'}`,
                                                                children: step.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/process-timeline.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-3b99ec8f78021521" + " " + "relative w-12 h-0.5 bg-gradient-to-r from-transparent via-[#1C3F57] to-transparent mx-auto overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b99ec8f78021521" + " " + "md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#1C3F57]/20 to-transparent transform -translate-x-1/2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/process-timeline.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b99ec8f78021521" + " " + "text-center mt-12 md:mt-16 lg:mt-20 animate-fade-up animation-delay-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3b99ec8f78021521" + " " + "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#1C3F57]/10 to-[#1C3F57]/5 border border-[#1C3F57]/20 backdrop-blur-sm group cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1C3F57]/15 hover:to-[#1C3F57]/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3b99ec8f78021521" + " " + "text-[#1C3F57] font-semibold",
                                            children: "Ready to start your project?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/process-timeline.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b99ec8f78021521" + " " + "relative w-6 h-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-3b99ec8f78021521" + " " + "absolute inset-0 bg-[#1C3F57] rounded-full animate-ping opacity-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/process-timeline.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/app/services/web-development/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WebDevelopmentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-ssr] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building.js [app-ssr] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$process$2d$timeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/process-timeline.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// ========== TEKREVOL COLOR SCHEME ==========
const COLORS = {
    primary: "#1D4059",
    secondary: "#3A7CA5",
    accent: "#F2B705",
    textLight: "#6B8BA4",
    white: "#FFFFFF",
    grayBg: "#F8FAFC",
    borderLight: "#1D4059/10",
    borderHover: "#3A7CA5",
    gradient: "linear-gradient(135deg, #1D4059 0%, #3A7CA5 100%)",
    gradientHover: "linear-gradient(135deg, #3A7CA5 0%, #1D4059 100%)"
};
// ========== WEB DEVELOPMENT CARDS DATA ==========
const webDevCards = [
    {
        id: 1,
        title: "E-commerce Platform",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
        color: "linear-gradient(145deg, #0f172a, #1e293b, #334155)",
        textColor: "#ffffff",
        accentColor: "#F2B705",
        category: "E-commerce",
        duration: "3:45",
        views: "5.2K",
        likes: "1.2K",
        description: "Full-featured online store with payment integration",
        technologies: [
            "React",
            "Node.js",
            "MongoDB",
            "Stripe API"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"]
    },
    {
        id: 2,
        title: "Corporate Website",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
        color: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        textColor: "#ffffff",
        accentColor: "#60a5fa",
        category: "Corporate",
        duration: "2:30",
        views: "3.8K",
        likes: "890",
        description: "Professional business website with CMS",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "Contentful"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
    },
    {
        id: 3,
        title: "SaaS Dashboard",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
        color: "linear-gradient(45deg, #7c3aed 0%, #a78bfa 100%)",
        textColor: "#ffffff",
        accentColor: "#c4b5fd",
        category: "SaaS",
        duration: "4:15",
        views: "6.7K",
        likes: "1.5K",
        description: "Analytics dashboard for SaaS products",
        technologies: [
            "React",
            "D3.js",
            "Express",
            "PostgreSQL"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        id: 4,
        title: "Mobile App Backend",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
        color: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        textColor: "#ffffff",
        accentColor: "#34d399",
        category: "Backend",
        duration: "5:20",
        views: "4.3K",
        likes: "1.1K",
        description: "Scalable backend for mobile applications",
        technologies: [
            "Node.js",
            "GraphQL",
            "Redis",
            "AWS"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
    },
    {
        id: 5,
        title: "Real-time Chat",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        thumbnail: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=400&fit=crop",
        color: "linear-gradient(145deg, #be185d 0%, #db2777 100%)",
        textColor: "#ffffff",
        accentColor: "#f472b6",
        category: "Real-time",
        duration: "2:45",
        views: "8.9K",
        likes: "2.3K",
        description: "WebSocket based chat application",
        technologies: [
            "Socket.io",
            "React",
            "MongoDB"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
    },
    {
        id: 6,
        title: "Portfolio Site",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=400&fit=crop",
        color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        textColor: "#ffffff",
        accentColor: "#fbbf24",
        category: "Portfolio",
        duration: "1:30",
        views: "2.5K",
        likes: "620",
        description: "Creative portfolio for designers",
        technologies: [
            "Gatsby",
            "GraphQL",
            "Framer Motion"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    },
    {
        id: 7,
        title: "Booking System",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail: "https://images.unsplash.com/photo-1587905069134-008460d7a636?w=400&h=400&fit=crop",
        color: "linear-gradient(45deg, #0d9488 0%, #2dd4bf 100%)",
        textColor: "#ffffff",
        accentColor: "#5eead4",
        category: "Booking",
        duration: "6:10",
        views: "5.8K",
        likes: "1.4K",
        description: "Online reservation system",
        technologies: [
            "Vue.js",
            "Laravel",
            "MySQL"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
    },
    {
        id: 8,
        title: "Learning Platform",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=400&fit=crop",
        color: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
        textColor: "#ffffff",
        accentColor: "#c4b5fd",
        category: "EdTech",
        duration: "7:25",
        views: "9.3K",
        likes: "2.1K",
        description: "Interactive learning management system",
        technologies: [
            "Next.js",
            "Prisma",
            "PostgreSQL",
            "Stripe"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        id: 9,
        title: "Social Network",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        thumbnail: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=400&fit=crop",
        color: "linear-gradient(145deg, #3b82f6 0%, #60a5fa 100%)",
        textColor: "#ffffff",
        accentColor: "#93c5fd",
        category: "Social",
        duration: "8:40",
        views: "12.5K",
        likes: "3.2K",
        description: "Social media platform with feeds",
        technologies: [
            "React Native",
            "Node.js",
            "MongoDB",
            "Redis"
        ],
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
];
// ========== SERVICES ==========
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: "UI/UX Web Design",
        desc: "Pixel-perfect designs with Figma & Adobe Creative Cloud for maximum engagement"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
        title: "Frontend Development",
        desc: "SEO-friendly, lightning-fast interfaces with React.js & Angular"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        title: "Backend Development",
        desc: "Scalable server solutions with Node.js, Python, and secure APIs"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        title: "Full Stack Development",
        desc: "End-to-end solutions with dynamic capabilities across all channels"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        title: "No/Low Code Development",
        desc: "Quick deployment with Appian & OutSystems without compromising functionality"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
        title: "Cloud Development",
        desc: "AWS, Azure & Google Cloud solutions for high availability"
    }
];
// ========== DEVELOPMENT PROCESS ==========
const process = [
    {
        step: "01",
        title: "Discovery & Planning",
        desc: "Evaluate project scope and set objectives with expert consultation",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    },
    {
        step: "02",
        title: "UI/UX Design",
        desc: "Create appealing, intuitive interface with our UI/UX experts",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    },
    {
        step: "03",
        title: "Development",
        desc: "Code to add functionality and backend features with pro developers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"]
    },
    {
        step: "04",
        title: "Testing & QA",
        desc: "Test, debug, and repeat until it's launch-ready",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"]
    },
    {
        step: "05",
        title: "Launch & Maintain",
        desc: "Go live and reach users. Adapt as you go",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
    }
];
// ========== TECHNOLOGY STACK ==========
const technologies = [
    {
        category: "Frontend",
        items: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Angular",
            "Vue.js",
            "TypeScript"
        ]
    },
    {
        category: "Backend",
        items: [
            "Node.js",
            "Python",
            "Java",
            "PHP",
            "Ruby on Rails",
            ".NET"
        ]
    },
    {
        category: "Database",
        items: [
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Cassandra",
            "Firebase"
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Docker",
            "Kubernetes"
        ]
    }
];
// ========== STATS ==========
const stats = [
    {
        number: "500+",
        label: "Projects Delivered"
    },
    {
        number: "98%",
        label: "Client Satisfaction"
    },
    {
        number: "50+",
        label: "Expert Developers"
    }
];
// ========== CAPABILITIES ==========
const capabilities = [
    {
        icon: "⚡",
        title: "High Performance",
        desc: "Optimized for speed and scalability"
    },
    {
        icon: "🔒",
        title: "Security First",
        desc: "Enterprise-grade security protocols"
    },
    {
        icon: "📱",
        title: "Responsive Design",
        desc: "Flawless experience on all devices"
    },
    {
        icon: "🚀",
        title: "Rapid Development",
        desc: "Agile methodology for faster delivery"
    },
    {
        icon: "🔄",
        title: "Continuous Updates",
        desc: "Regular maintenance and improvements"
    },
    {
        icon: "📊",
        title: "Analytics Integration",
        desc: "Data-driven insights and reporting"
    }
];
function WebDevelopmentPage() {
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [playingVideo, setPlayingVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [focusedCard, setFocusedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrolling, setScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTablet, setIsTablet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsLoaded(true);
    }, []);
    // Device detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkDevice = ()=>{
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };
        checkDevice();
        const debouncedResize = debounce(checkDevice, 100);
        window.addEventListener('resize', debouncedResize);
        return ()=>window.removeEventListener('resize', debouncedResize);
    }, []);
    // Intersection Observer for cards
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index") || "0");
                    setVisibleCards((prev)=>{
                        const newVisible = [
                            ...prev
                        ];
                        newVisible[index] = true;
                        return newVisible;
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        const cards = sectionRef.current?.querySelectorAll("[data-index]");
        cards?.forEach((el)=>observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    // Scroll handling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let scrollTimeout;
        const handleScroll = ()=>{
            setScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(()=>setScrolling(false), 100);
        };
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);
    // Handle video play/pause
    const handleVideoClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        if (playingVideo === index) {
            const video = videoRefs.current[index];
            if (video) {
                video.pause();
                setPlayingVideo(null);
            }
        } else {
            if (playingVideo !== null) {
                const prevVideo = videoRefs.current[playingVideo];
                if (prevVideo) {
                    prevVideo.pause();
                    prevVideo.currentTime = 0;
                }
            }
            setPlayingVideo(index);
            setFocusedCard(index);
            setTimeout(()=>{
                const video = videoRefs.current[index];
                if (video) {
                    video.play().catch((e)=>console.log("Video play error:", e));
                }
            }, 100);
        }
    }, [
        playingVideo
    ]);
    // Handle video ended
    const handleVideoEnded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        setPlayingVideo(null);
        const video = videoRefs.current[index];
        if (video) video.currentTime = 0;
    }, []);
    // Card positioning calculations
    const getCardTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index, isFocused)=>{
        if (isMobile) {
            if (isFocused) return "translateY(0px) scale(1) translateZ(50px) rotateX(0deg)";
            const offset = (index - (focusedCard || 0)) * 12;
            const rotate = (index - (focusedCard || 0)) * 0.5;
            return `translateY(${offset}px) scale(0.92) translateZ(0px) rotateX(${rotate}deg)`;
        }
        if (isTablet) {
            const centerIndex = 2;
            const positionFromCenter = index - centerIndex;
            if (isFocused) return "translateX(0px) scale(1.08) translateZ(60px) rotateY(0deg)";
            const xOffset = positionFromCenter * 110;
            const scale = 1 - Math.abs(positionFromCenter) * 0.03;
            const rotateY = -positionFromCenter * 3;
            return `translateX(${xOffset}px) scale(${scale}) translateZ(${Math.abs(positionFromCenter) * -10}px) rotateY(${rotateY}deg)`;
        }
        // Desktop layout
        const centerIndex = 4;
        const positionFromCenter = index - centerIndex;
        if (isFocused) return "translateX(0px) scale(1.12) translateZ(80px) rotateY(0deg) rotateX(0deg)";
        const xOffset = positionFromCenter * 130;
        const scale = 1 - Math.abs(positionFromCenter) * 0.04;
        const rotateY = -positionFromCenter * 2;
        const rotateX = Math.abs(positionFromCenter) * -0.5;
        const zOffset = Math.abs(positionFromCenter) * -15;
        return `translateX(${xOffset}px) scale(${scale}) translateZ(${zOffset}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }, [
        isMobile,
        isTablet,
        focusedCard
    ]);
    const getCardZIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index, isFocused)=>{
        if (isFocused) return 100;
        if (isMobile) {
            const centerIndex = focusedCard || 0;
            const distanceFromCenter = Math.abs(index - centerIndex);
            return 50 - distanceFromCenter * 2;
        }
        const centerIndex = isTablet ? 2 : 4;
        const distanceFromCenter = Math.abs(index - centerIndex);
        return 50 - distanceFromCenter * 3;
    }, [
        isMobile,
        isTablet,
        focusedCard
    ]);
    // Render web development cards with 3D effects
    const renderWebDevCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const maxCards = isMobile ? 5 : isTablet ? 6 : webDevCards.length;
        const cardsToRender = webDevCards.slice(0, maxCards);
        return cardsToRender.map((card, index)=>{
            const isFocused = focusedCard === index;
            const isPlaying = playingVideo === index;
            const isVisible = visibleCards[index] ?? false;
            const IconComponent = card.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-index": index,
                onClick: ()=>handleVideoClick(index),
                className: `absolute transition-all duration-500 ease-[cubic-bezier(0.2,0.85,0.3,1.05)] cursor-pointer transform-gpu ${isVisible ? 'opacity-100' : 'opacity-0'} ${isMobile ? 'touch-pan-y' : ''}`,
                style: {
                    transform: getCardTransform(index, isFocused),
                    width: isMobile ? '240px' : isTablet ? '280px' : '300px',
                    height: isMobile ? '300px' : isTablet ? '340px' : '360px',
                    left: '50%',
                    marginLeft: isMobile ? '-120px' : isTablet ? '-140px' : '-150px',
                    transitionDelay: `${index * 30}ms`,
                    willChange: 'transform',
                    zIndex: getCardZIndex(index, isFocused),
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    top: isMobile ? `${index * 15}px` : '0',
                    pointerEvents: 'auto',
                    perspective: '1000px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full rounded-2xl overflow-hidden relative shadow-2xl transition-all duration-500 group",
                        style: {
                            background: card.color,
                            border: isFocused ? `3px solid ${card.accentColor}` : '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: isFocused ? `0 30px 60px -20px rgba(0, 0, 0, 0.4),
                   0 15px 30px rgba(29, 64, 89, 0.3),
                   0 0 0 2px ${card.accentColor}50,
                   0 0 40px ${card.accentColor}30,
                   inset 0 4px 8px rgba(255, 255, 255, 0.08)` : `0 25px 50px -15px rgba(0, 0, 0, 0.25),
                   0 10px 20px rgba(29, 64, 89, 0.2),
                   0 0 0 1px rgba(255, 255, 255, 0.05),
                   inset 0 1px 2px rgba(255, 255, 255, 0.03)`,
                            transform: 'translateZ(0)',
                            filter: isFocused ? 'brightness(1.05)' : 'brightness(1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-50 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 transform-gpu",
                                style: {
                                    transformStyle: 'preserve-3d'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: (el)=>{
                                            videoRefs.current[index] = el;
                                        },
                                        src: card.videoUrl,
                                        className: "w-full h-full object-cover transform-gpu",
                                        muted: true,
                                        loop: false,
                                        playsInline: true,
                                        preload: "metadata",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleVideoClick(index);
                                        },
                                        onEnded: ()=>handleVideoEnded(index),
                                        poster: card.thumbnail,
                                        style: {
                                            transform: 'translateZ(1px)',
                                            backfaceVisibility: 'hidden'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 15
                                    }, this),
                                    !isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center justify-center transform-gpu",
                                        style: {
                                            transform: 'translateZ(2px)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 w-16 h-16 rounded-full bg-[#1D4059]/30 blur-lg transform-gpu"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-14 h-14 rounded-full bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-all duration-300 transform-gpu hover:rotate-12",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-5 h-5 text-white ml-0.5 drop-shadow-lg transform-gpu",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 17
                                    }, this),
                                    isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-transparent to-transparent transform-gpu",
                                        style: {
                                            transform: 'translateZ(2px)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#1D4059]/70 to-[#3A7CA5]/70 blur-md transform-gpu"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-12 h-12 rounded-full bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 transform-gpu hover:scale-110 transition-transform",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                        className: "w-4 h-4 text-white drop-shadow-lg",
                                                        fill: "white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 521,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 514,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/15 via-white/5 to-transparent transform-gpu",
                                style: {
                                    transform: 'translateZ(1px)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 529,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 left-3 transform-gpu",
                                style: {
                                    transform: 'translateZ(10px)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1.5 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/25 shadow-lg flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this),
                                        card.category
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent transform-gpu",
                                style: {
                                    transform: 'translateZ(15px)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-white mb-1.5 drop-shadow-lg truncate transform-gpu",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 547,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between transform-gpu",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-white/80",
                                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse shadow-lg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent",
                                                            children: "Playing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs flex items-center gap-1 truncate bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                    className: "w-3 h-3 flex-shrink-0 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 562,
                                                                    columnNumber: 25
                                                                }, this),
                                                                isMobile ? 'Tap to play' : 'Click to play'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-1 rounded-full bg-gradient-to-r from-white/80 to-white/60 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs truncate bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                                                            children: card.technologies[0]
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-white/70 text-xs transform-gpu",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                                                        children: card.duration
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 550,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, this),
                            isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-16 left-4 right-4 transform-gpu",
                                style: {
                                    transform: 'translateZ(20px)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1.5 w-full bg-gradient-to-r from-white/10 to-white/5 rounded-full overflow-hidden backdrop-blur-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gradient-to-r from-[#1D4059] via-[#3A7CA5] to-[#F2B705] animate-progress shadow-lg",
                                        style: {
                                            animationDuration: card.duration.replace(':', 'm') + 's',
                                            boxShadow: `0 0 10px ${card.accentColor}30`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 590,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 589,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 585,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this),
                    isFocused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#1D4059]/20 via-[#3A7CA5]/15 to-transparent blur-xl opacity-70 pointer-events-none transition-all duration-500",
                        style: {
                            transform: 'translateZ(-10px)',
                            animation: 'pulseGlow 2s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 604,
                        columnNumber: 13
                    }, this),
                    !isFocused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -inset-2 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 615,
                        columnNumber: 13
                    }, this)
                ]
            }, card.id, true, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 427,
                columnNumber: 9
            }, this);
        });
    }, [
        focusedCard,
        visibleCards,
        isMobile,
        isTablet,
        playingVideo,
        handleVideoClick,
        handleVideoEnded,
        getCardTransform,
        getCardZIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-dd4e4bff496d2f19" + " " + "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-dd4e4bff496d2f19" + " " + "fixed inset-0 -z-10 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundImage: "url(/images/vecteezy-white-abstract-background-design-with-wavy-lines-8987818.jpg)"
                        },
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 bg-cover bg-center opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute top-20 left-10 w-96 h-96 bg-[#1D4059] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 633,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDelay: "1.5s"
                        },
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute bottom-20 right-10 w-80 h-80 bg-[#3A7CA5]/60 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDelay: "3s"
                        },
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute top-1/2 left-1/3 w-72 h-72 bg-[#F2B705]/40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 625,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-dd4e4bff496d2f19" + " " + "relative pt-32 pb-24 bg-gradient-to-b from-white/90 to-white/70 overflow-hidden min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-dd4e4bff496d2f19" + " " + "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-dd4e4bff496d2f19" + " " + "order-1 lg:order-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "max-w-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "inline-block mb-6 animate-bounce",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + "pill-badge bg-[#1D4059]/10 text-[#1D4059] border border-[#1D4059]/30 font-semibold backdrop-blur-sm shadow-xl",
                                                    children: "🌐 Web Development Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 652,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 leading-tight",
                                                children: [
                                                    "Build ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "text-[#3A7CA5]",
                                                        children: "Powerful"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 25
                                                    }, this),
                                                    ", Scalable Web Solutions"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 658,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "text-lg text-[#1D4059]/80 mb-8 leading-relaxed",
                                                children: "We create scalable digital platforms with intuitive UI/UX and performant functionalities for accessible online interaction. From startups to enterprises, we deliver excellence."
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 662,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "flex flex-wrap gap-6 mb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-6 h-6 text-[#1D4059]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + "text-[#1D4059] font-medium",
                                                                children: "Custom Solutions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 669,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-6 h-6 text-[#1D4059]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 672,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + "text-[#1D4059] font-medium",
                                                                children: "Fast Delivery"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 673,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-6 h-6 text-[#1D4059]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 676,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + "text-[#1D4059] font-medium",
                                                                children: "Expert Developers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 666,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#portfolio-section",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + "px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group",
                                                    children: [
                                                        "View Our Portfolio",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 20,
                                                            className: "group-hover:translate-x-2 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-dd4e4bff496d2f19" + " " + "relative order-2 lg:order-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1D4059]/40 transform perspective-1000",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute -inset-4 bg-gradient-to-r from-[#1D4059]/30 to-[#3A7CA5]/30 rounded-3xl blur-xl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "relative rounded-2xl overflow-hidden border-4 border-white/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                autoPlay: true,
                                                                muted: true,
                                                                loop: true,
                                                                playsInline: true,
                                                                poster: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
                                                                className: "jsx-dd4e4bff496d2f19" + " " + "w-full h-[380px] md:h-[420px] lg:h-[350px] object-cover",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
                                                                    type: "video/mp4",
                                                                    className: "jsx-dd4e4bff496d2f19"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 706,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute bottom-4 left-4 right-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "flex items-center justify-between",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + "text-xs text-white/80 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm",
                                                                        children: "Web Development Showcase"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 715,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 714,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 713,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] animate-bounce opacity-80"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 724,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDelay: "0.3s"
                                                },
                                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] animate-bounce opacity-80"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 725,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 692,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 691,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/web-development/page.tsx",
                            lineNumber: 647,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: "20s"
                        },
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute top-10 right-10 w-32 h-32 border-4 border-[#1D4059]/20 rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 732,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            animationDuration: "3s"
                        },
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute bottom-10 left-10 w-24 h-24 border-4 border-[#1D4059]/20 rounded-lg animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 733,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 645,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-dd4e4bff496d2f19" + " " + "relative py-24 bg-gradient-to-b from-white/70 to-[#F8FAFC]/30 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 opacity-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute top-0 left-1/4 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 740,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: "2s"
                                },
                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute bottom-0 right-1/4 w-80 h-80 bg-[#3A7CA5]/60 rounded-full filter blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 741,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 739,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "inline-flex items-center justify-center gap-4 mb-8 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] blur-lg opacity-70 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                        className: "text-white relative z-10",
                                                        size: 40
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 749,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 753,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 747,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "relative inline-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-xl rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "relative",
                                                        children: "WEB DEVELOPMENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "block mt-2 text-3xl md:text-4xl font-medium text-[#1D4059]/80",
                                                children: "Professional Services"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 762,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "text-xl text-[#1D4059]/80 max-w-3xl mx-auto leading-relaxed relative",
                                        children: "Comprehensive web development solutions tailored to your business needs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 765,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8",
                                children: services.map((service, idx)=>{
                                    const IconComponent = service.icon;
                                    const isHovered = hoveredIndex === idx;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseEnter: ()=>setHoveredIndex(idx),
                                        onMouseLeave: ()=>setHoveredIndex(null),
                                        style: {
                                            transitionDelay: `${idx * 150}ms`
                                        },
                                        className: "jsx-dd4e4bff496d2f19" + " " + `group relative cursor-pointer perspective-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-dd4e4bff496d2f19" + " " + `relative w-full h-full transform transition-all duration-700 ${isHovered ? "translate-y-0 rotate-0" : "translate-y-6"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + `relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${isHovered ? "shadow-2xl shadow-[#1D4059]/20 ring-2 ring-[#1D4059]/20" : "shadow-lg shadow-gray-300/30"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 798,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 overflow-hidden",
                                                            children: [
                                                                ...Array(5)
                                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        left: `${10 + i * 20}%`,
                                                                        top: `${20 + i * 15}%`,
                                                                        animationDelay: `${i * 0.5}s`,
                                                                        animationDuration: `${3 + i}s`
                                                                    },
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "absolute w-1 h-1 bg-[#1D4059]/40 rounded-full animate-float"
                                                                }, i, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 803,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 801,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + `absolute -inset-4 bg-gradient-to-r from-[#1D4059]/10 to-[#3A7CA5]/10 rounded-3xl blur-xl opacity-0 transition-opacity duration-700 ${isHovered ? "opacity-70" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 817,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "relative z-10 mb-8 flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `absolute -inset-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] opacity-20 blur-md transition-all duration-700 ${isHovered ? "scale-125" : "scale-100"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 824,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                        size: 36,
                                                                        color: "#1D4059",
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `transition-all duration-300 transform ${isHovered ? "scale-110" : ""}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 828,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] transition-all duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 837,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] transition-all duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 840,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 823,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 822,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "text-2xl font-bold text-[#1D4059] mb-4 text-center transition-all duration-500 group-hover:translate-y-1",
                                                                    children: service.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 848,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "text-[#1D4059]/80 leading-relaxed text-center transition-all duration-500 group-hover:text-[#1D4059] mb-8",
                                                                    children: service.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 852,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "flex justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `inline-flex items-center gap-2 text-[#1D4059] font-medium transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-dd4e4bff496d2f19",
                                                                                children: "Learn more"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                                lineNumber: 861,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                                className: "w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                                lineNumber: 862,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 858,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 857,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 847,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute top-4 right-4 w-12 h-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + `absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#1D4059]/30 rounded-tr-2xl transition-all duration-700 ${isHovered ? "border-[#1D4059]/70 w-8 h-8" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 869,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 868,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute bottom-4 left-4 w-12 h-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + `absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#1D4059]/30 rounded-bl-2xl transition-all duration-700 ${isHovered ? "border-[#1D4059]/70 w-8 h-8" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 875,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 874,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + `absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#1D4059] to-transparent transition-all duration-1000 ${isHovered ? "w-3/4 opacity-100" : "w-0 opacity-0"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 881,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + `absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-[#1D4059]/20 to-transparent blur-md rounded-3xl transition-all duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 777,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 771,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 744,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 737,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "portfolio-section",
                ref: sectionRef,
                className: "jsx-dd4e4bff496d2f19" + " " + "relative py-24 bg-gradient-to-b from-[#F8FAFC]/30 to-white/70 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 opacity-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundImage: `radial-gradient(circle at 2px 2px, #1D4059 1px, transparent 0)`,
                                backgroundSize: '40px 40px',
                                animation: scrolling ? 'none' : 'backgroundMove 20s linear infinite'
                            },
                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0"
                        }, void 0, false, {
                            fileName: "[project]/app/services/web-development/page.tsx",
                            lineNumber: 902,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 901,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 overflow-hidden",
                        children: [
                            ...Array(8)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute rounded-full bg-gradient-to-br from-[#A3C6C4]/10 to-[#6C7A89]/5 backdrop-blur-sm"
                            }, i, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 912,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 910,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "inline-flex items-center gap-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "w-12 h-1 bg-gradient-to-r from-transparent to-[#1D4059] rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 933,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                className: "text-[#1D4059]",
                                                size: 32
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 934,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "w-12 h-1 bg-gradient-to-l from-transparent to-[#1D4059] rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 935,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 932,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "text-4xl md:text-5xl font-bold text-[#1D4059] mb-4",
                                        children: "WEB DEVELOPMENT PORTFOLIO"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 937,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "text-lg text-[#1D4059]/70 max-w-2xl mx-auto mb-8",
                                        children: "Interactive 3D cards showcasing our best web development projects. Click to play videos and explore our work."
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 938,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 931,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + `flex justify-center items-center ${isMobile ? 'min-h-[350px] sm:min-h-[380px]' : isTablet ? 'min-h-[380px]' : 'min-h-[420px]'} py-3 sm:py-4 md:py-5 overflow-x-hidden overflow-y-visible`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: containerRef,
                                            style: {
                                                height: isMobile ? '320px' : isTablet ? '350px' : '380px',
                                                width: 'max-content',
                                                transformStyle: 'preserve-3d'
                                            },
                                            className: "jsx-dd4e4bff496d2f19" + " " + "relative flex items-center justify-center perspective-1000",
                                            children: renderWebDevCards()
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 949,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 945,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "text-center mt-8 px-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "text-[#1D4059]/70 text-sm bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] bg-clip-text text-transparent",
                                                children: isMobile ? 'Tap a card to play video' : 'Click a card to play video'
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 964,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "text-[#1D4059]/70 text-sm mt-2",
                                                children: "Each card represents a different web development project with unique technologies."
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 967,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 963,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 944,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 930,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 899,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-dd4e4bff496d2f19" + " " + "relative py-24 bg-gradient-to-b from-white/70 to-[#F8FAFC]/30 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 opacity-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute top-0 left-1/4 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 979,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: "2s"
                                },
                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute bottom-0 right-1/4 w-80 h-80 bg-[#3A7CA5]/60 rounded-full filter blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 980,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 978,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "inline-flex items-center justify-center gap-4 mb-8 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 987,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] blur-lg opacity-70 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 989,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                        className: "text-white relative z-10",
                                                        size: 40
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 990,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 988,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "w-16 h-1 bg-gradient-to-r from-transparent via-[#1D4059]/70 to-transparent rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 992,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 986,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-dd4e4bff496d2f19" + " " + "text-5xl md:text-6xl font-bold text-[#1D4059] mb-6 relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "relative inline-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute -inset-1 bg-gradient-to-r from-[#1D4059]/10 to-transparent blur-xl rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 998,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-dd4e4bff496d2f19" + " " + "relative",
                                                        children: "OUR CAPABILITIES"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                        lineNumber: 999,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 997,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-dd4e4bff496d2f19" + " " + "block mt-2 text-3xl md:text-4xl font-medium text-[#1D4059]/80",
                                                children: "End-to-End Web Development"
                                            }, void 0, false, {
                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                lineNumber: 1001,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 996,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 984,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8",
                                children: capabilities.map((cap, idx)=>{
                                    const isHovered = hoveredIndex === idx;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onMouseEnter: ()=>setHoveredIndex(idx),
                                        onMouseLeave: ()=>setHoveredIndex(null),
                                        style: {
                                            transitionDelay: `${idx * 150}ms`
                                        },
                                        className: "jsx-dd4e4bff496d2f19" + " " + `group relative cursor-pointer perspective-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-dd4e4bff496d2f19" + " " + `relative w-full h-full transform transition-all duration-700 ${isHovered ? "translate-y-0 rotate-0" : "translate-y-6"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + `relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50/90 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${isHovered ? "shadow-2xl shadow-[#1D4059]/20 ring-2 ring-[#1D4059]/20" : "shadow-lg shadow-gray-300/30"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1D4059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 overflow-hidden",
                                                            children: [
                                                                ...Array(5)
                                                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        left: `${10 + i * 20}%`,
                                                                        top: `${20 + i * 15}%`,
                                                                        animationDelay: `${i * 0.5}s`,
                                                                        animationDuration: `${3 + i}s`
                                                                    },
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "absolute w-1 h-1 bg-[#1D4059]/40 rounded-full animate-float"
                                                                }, i, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 1037,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1035,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + `absolute -inset-4 bg-gradient-to-r from-[#1D4059]/10 to-[#3A7CA5]/10 rounded-3xl blur-xl opacity-0 transition-opacity duration-700 ${isHovered ? "opacity-70" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1051,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "relative z-10 mb-8 flex justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `absolute -inset-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] opacity-20 blur-md transition-all duration-700 ${isHovered ? "scale-125" : "scale-100"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 1058,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-dd4e4bff496d2f19" + " " + `text-3xl transition-all duration-300 ${isHovered ? "text-[#F2B705]" : "text-[#1D4059]"}`,
                                                                            children: cap.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                                            lineNumber: 1063,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 1062,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#1D4059] to-[#3A7CA5] transition-all duration-700 ${isHovered ? "opacity-100 animate-pulse" : "opacity-0"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 1073,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#1D4059] transition-all duration-700 ${isHovered ? "opacity-100 animate-pulse delay-150" : "opacity-0"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 1076,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 1057,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1056,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "text-2xl font-bold text-[#1D4059] mb-4 text-center transition-all duration-500 group-hover:translate-y-1",
                                                                    children: cap.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 1084,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "text-[#1D4059]/80 leading-relaxed text-center transition-all duration-500 group-hover:text-[#1D4059] mb-8",
                                                                    children: cap.desc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 1088,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-dd4e4bff496d2f19" + " " + "flex justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-dd4e4bff496d2f19" + " " + `inline-flex items-center gap-2 text-[#1D4059] font-medium transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "jsx-dd4e4bff496d2f19",
                                                                                children: "Learn more"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                                lineNumber: 1097,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                                className: "w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                                lineNumber: 1098,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/services/web-development/page.tsx",
                                                                        lineNumber: 1094,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                                    lineNumber: 1093,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1083,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute top-4 right-4 w-12 h-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + `absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#1D4059]/30 rounded-tr-2xl transition-all duration-700 ${isHovered ? "border-[#1D4059]/70 w-8 h-8" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1104,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute bottom-4 left-4 w-12 h-12",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-dd4e4bff496d2f19" + " " + `absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#1D4059]/30 rounded-bl-2xl transition-all duration-700 ${isHovered ? "border-[#1D4059]/70 w-8 h-8" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/services/web-development/page.tsx",
                                                                lineNumber: 1111,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1110,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + `absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#1D4059] to-transparent transition-all duration-1000 ${isHovered ? "w-3/4 opacity-100" : "w-0 opacity-0"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1117,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + `absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-[#1D4059]/20 to-transparent blur-md rounded-3xl transition-all duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 1123,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 1021,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/app/services/web-development/page.tsx",
                                        lineNumber: 1011,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 1006,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 983,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 976,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$process$2d$timeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 1135,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-dd4e4bff496d2f19" + " " + "relative py-24 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-dd4e4bff496d2f19" + " " + "container mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-dd4e4bff496d2f19" + " " + "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-dd4e4bff496d2f19" + " " + "text-4xl font-bold text-[#1D4059] mb-4",
                                    children: "Technology Stack"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 1141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-dd4e4bff496d2f19" + " " + "text-lg text-[#6B8BA4] mb-12 max-w-2xl mx-auto",
                                    children: "We use the latest technologies to build innovative solutions tailored to your needs"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 1142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/web-development/page.tsx",
                            lineNumber: 1140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-dd4e4bff496d2f19" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                            children: technologies.map((tech, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-dd4e4bff496d2f19" + " " + "p-8 rounded-2xl bg-gradient-to-b from-white to-[#F8FAFC] border-2 border-[#1D4059]/10 hover:border-[#3A7CA5] transition-all duration-500 hover:shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-dd4e4bff496d2f19" + " " + "text-xl font-bold text-[#1D4059] mb-6",
                                            children: tech.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-dd4e4bff496d2f19" + " " + "space-y-3",
                                            children: tech.items.map((item, itemIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "w-2 h-2 rounded-full bg-[#3A7CA5]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1154,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-dd4e4bff496d2f19" + " " + "text-[#1D4059] font-medium",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/services/web-development/page.tsx",
                                                            lineNumber: 1155,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, itemIdx, true, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 1153,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 1149,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/services/web-development/page.tsx",
                            lineNumber: 1147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/services/web-development/page.tsx",
                    lineNumber: 1139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 1138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-dd4e4bff496d2f19" + " " + "relative py-24 bg-gradient-to-b from-white/70 to-[#F8FAFC]/20 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 opacity-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute top-10 left-10 w-64 h-64 bg-[#1D4059] rounded-full filter blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 1169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animationDelay: "1s"
                                },
                                className: "jsx-dd4e4bff496d2f19" + " " + "absolute bottom-10 right-10 w-72 h-72 bg-[#3A7CA5] rounded-full filter blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 1170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 1168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-dd4e4bff496d2f19" + " " + "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: stats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        transitionDelay: `${idx * 150}ms`
                                    },
                                    className: "jsx-dd4e4bff496d2f19" + " " + "group relative p-10 rounded-2xl bg-white/70 backdrop-blur-md border-2 border-[#1D4059]/30 text-center hover:border-[#3A7CA5] hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute inset-0 bg-gradient-to-br from-[#1D4059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 1182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-dd4e4bff496d2f19" + " " + "relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + "text-6xl font-bold text-[#1D4059] mb-3 group-hover:scale-125 transition-transform duration-500",
                                                    children: stat.number
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-dd4e4bff496d2f19" + " " + "text-[#6B8BA4] font-semibold text-lg",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/web-development/page.tsx",
                                                    lineNumber: 1188,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 1184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-dd4e4bff496d2f19" + " " + "absolute -top-10 -right-10 w-32 h-32 bg-[#1D4059]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 1192,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/services/web-development/page.tsx",
                            lineNumber: 1174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 1173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 1166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-dd4e4bff496d2f19" + " " + "relative py-24 bg-gradient-to-br from-[#1D4059] via-[#2a5a7a] to-[#1D4059] text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-dd4e4bff496d2f19" + " " + "container mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd4e4bff496d2f19" + " " + "max-w-2xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "text-4xl font-bold mb-6",
                                children: "Ready to Start Your Project?"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 1203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "text-lg opacity-90 mb-8",
                                children: "Let's discuss your requirements and create a custom solution for your business"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 1204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "jsx-dd4e4bff496d2f19" + " " + "px-10 py-5 rounded-full bg-white text-[#1D4059] font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 1209,
                                            columnNumber: 17
                                        }, this),
                                        "Schedule Free Consultation",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 24,
                                            className: "group-hover:translate-x-2 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/web-development/page.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/web-development/page.tsx",
                                    lineNumber: 1208,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 1207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-dd4e4bff496d2f19" + " " + "mt-6 text-sm opacity-80",
                                children: "Get response within 24 hours"
                            }, void 0, false, {
                                fileName: "[project]/app/services/web-development/page.tsx",
                                lineNumber: 1214,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/services/web-development/page.tsx",
                        lineNumber: 1202,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/services/web-development/page.tsx",
                    lineNumber: 1201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/web-development/page.tsx",
                lineNumber: 1200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "dd4e4bff496d2f19",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes scaleIn{0%{opacity:0;transform:scale(.95)translateZ(-50px)}to{opacity:1;transform:scale(1)translateZ(0)}}@keyframes float{0%,to{transform:translateY(0)translate(0)rotate(0)}25%{transform:translateY(-15px)translate(8px)rotate(2deg)}50%{transform:translateY(-25px)translate(-8px)rotate(-1deg)}75%{transform:translateY(-15px)translate(-15px)rotate(1deg)}}@keyframes float3D{0%,to{transform:translateY(0)translate(0)translateZ(0)rotate(0)}33%{transform:translateY(-20px)translate(10px)translateZ(10px)rotate(120deg)}66%{transform:translateY(-30px)translate(-10px)translateZ(5px)rotate(240deg)}}@keyframes backgroundMove{0%{background-position:0 0}to{background-position:40px 40px}}@keyframes progress{0%{width:0%}to{width:100%}}@keyframes pulseGlow{0%,to{opacity:.7;transform:translateZ(-10px)scale(1)}50%{opacity:.9;transform:translateZ(-10px)scale(1.05)}}.animate-fadeIn.jsx-dd4e4bff496d2f19{animation:.3s cubic-bezier(.2,.85,.3,1.05) forwards fadeIn}.animate-scaleIn.jsx-dd4e4bff496d2f19{animation:.4s cubic-bezier(.2,.85,.3,1.05) forwards scaleIn}.animate-progress.jsx-dd4e4bff496d2f19{animation:linear forwards progress}.perspective-1000.jsx-dd4e4bff496d2f19{perspective:1000px}.perspective-1500.jsx-dd4e4bff496d2f19{perspective:1500px}.transform-gpu.jsx-dd4e4bff496d2f19{backface-visibility:hidden;transform:translateZ(0)}.line-clamp-2.jsx-dd4e4bff496d2f19{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.pill-badge.jsx-dd4e4bff496d2f19{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid #1d40594d;border-radius:9999px;padding:.5rem 1.5rem}@media (prefers-reduced-motion:reduce){.transition-all.jsx-dd4e4bff496d2f19,.animate-fadeIn.jsx-dd4e4bff496d2f19,.animate-scaleIn.jsx-dd4e4bff496d2f19,.animate-pulse.jsx-dd4e4bff496d2f19,.animate-ping.jsx-dd4e4bff496d2f19,.animate-progress.jsx-dd4e4bff496d2f19{transition-duration:.01ms!important;animation-duration:.01ms!important;animation-iteration-count:1!important}}@media (width<=640px){button.jsx-dd4e4bff496d2f19,[role=button].jsx-dd4e4bff496d2f19{min-width:44px;min-height:44px}.container.jsx-dd4e4bff496d2f19{padding-left:.75rem;padding-right:.75rem}video.jsx-dd4e4bff496d2f19{object-fit:cover}.perspective-1000.jsx-dd4e4bff496d2f19{perspective:800px}}@media (width<=360px){.absolute.jsx-dd4e4bff496d2f19{width:220px!important;height:280px!important;margin-left:-110px!important}}@media (height<=600px) and (orientation:landscape){.min-h-screen.jsx-dd4e4bff496d2f19{min-height:auto}.flex.justify-center.items-center.jsx-dd4e4bff496d2f19{min-height:320px!important}}.jsx-dd4e4bff496d2f19{scroll-behavior:smooth}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/web-development/page.tsx",
        lineNumber: 623,
        columnNumber: 5
    }, this);
}
// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
}),
];

//# sourceMappingURL=_2c8fa5bb._.js.map