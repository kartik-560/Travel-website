/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mountain,
  Sun,
  Compass,
  Search,
  X,
  ArrowRight,
  Clock,
  Sparkles,
  SlidersHorizontal,
  RotateCcw,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

// Helper for category-specific icon
const getCategoryIcon = (category = "") => {
  const cat = category.toLowerCase();
  if (cat.includes("adventure") || cat.includes("trek") || cat.includes("himalaya")) {
    return <Mountain className="w-5 h-5 text-orange-600" />;
  }
  if (cat.includes("spiritual") || cat.includes("wellness") || cat.includes("retreat")) {
    return <Sparkles className="w-5 h-5 text-purple-600" />;
  }
  if (cat.includes("leisure") || cat.includes("beach") || cat.includes("offbeat")) {
    return <Waves className="w-5 h-5 text-sky-600" />;
  }
  return <Compass className="w-5 h-5 text-emerald-600" />;
};

// Helper for difficulty badge styling
const getDifficultyBadge = (difficulty = "") => {
  const diffLower = (difficulty || "").toLowerCase();
  if (diffLower.includes("easy")) {
    return {
      bg: "bg-emerald-500/90 text-white border-emerald-400/40",
      label: difficulty || "Easy",
    };
  }
  if (
    diffLower.includes("challeng") ||
    diffLower.includes("hard") ||
    diffLower.includes("diff")
  ) {
    return {
      bg: "bg-rose-500/90 text-white border-rose-400/40",
      label: difficulty || "Challenging",
    };
  }
  return {
    bg: "bg-amber-500/90 text-white border-amber-400/40",
    label: difficulty || "Moderate",
  };
};

const ImmersiveCard = ({ trip, idx }) => {
  const [imgSrc, setImgSrc] = useState(
    trip.images?.[0] || "/assest/chandratal/Chandratal.webp"
  );
  const diffBadge = getDifficultyBadge(trip.difficulty);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
      whileHover={{ y: -6 }}
      className="group relative h-[480px] sm:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/90 bg-slate-900 flex flex-col justify-between"
    >
      {/* Background Image with smooth hover scale */}
      <img
        src={imgSrc}
        alt={trip.title}
        width="600"
        height="800"
        loading="lazy"
        decoding="async"
        onError={() => setImgSrc("/assest/chandratal/Chandratal.webp")}
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
      />

      {/* Multi-tier gradient overlay to ensure crystal-clear text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-black/35" />

      {/* Top Floating Badges */}
      <div className="relative z-10 p-5 flex items-start justify-between gap-2">
        <div className="flex flex-wrap gap-2 items-center">
          {trip.category && (
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md uppercase tracking-wider">
              {trip.category}
            </span>
          )}
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md shadow-xs ${diffBadge.bg}`}
          >
            {diffBadge.label}
          </span>
        </div>

        {trip.duration && (
          <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-orange-300 text-xs font-semibold border border-white/20">
            <Clock className="w-3.5 h-3.5" />
            <span>{trip.duration}</span>
          </span>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-5 sm:p-6 text-white space-y-3.5">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-orange-300 transition-colors line-clamp-2 leading-snug">
            {trip.title}
          </h3>
          {trip.subTitle && (
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 mt-1 font-light">
              {trip.subTitle}
            </p>
          )}
        </div>

        {/* Key Trip Meta Stats Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-200 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/15">
          <div className="flex items-center gap-1.5 min-w-0">
            <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{trip.duration || "Multi-Day"}</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <Mountain className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">
              {trip.maxElevation || trip.difficulty || "Alpine Pass"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span className="truncate">
              {trip.startPoint
                ? `${trip.startPoint} → ${trip.endPoint || "Return"}`
                : trip.distance || "Curated Route"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">
              {trip.highlights?.length
                ? `${trip.highlights.length} Highlights`
                : "Custom Pacing"}
            </span>
          </div>
        </div>

        {/* Highlights tag snippet */}
        {Array.isArray(trip.highlights) && trip.highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {trip.highlights.slice(0, 3).map((h, i) => (
              <span
                key={i}
                className="inline-flex items-center text-[10px] sm:text-[11px] font-medium text-slate-200 bg-black/40 px-2 py-0.5 rounded-md border border-white/10"
              >
                • {typeof h === "string" ? h.slice(0, 22) : h}
              </span>
            ))}
            {trip.highlights.length > 3 && (
              <span className="text-[10px] text-orange-300 font-semibold self-center">
                +{trip.highlights.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-1 flex items-center justify-between border-t border-white/15 text-xs sm:text-sm font-semibold text-orange-400 group-hover:text-orange-300">
          <span>View Detailed Day-by-Day Plan</span>
          <span className="p-1.5 rounded-full bg-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all">
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const TripSkeletonCard = () => (
  <div className="relative h-[480px] sm:h-[500px] rounded-3xl overflow-hidden bg-slate-200 animate-pulse p-6 flex flex-col justify-between shadow-md border border-slate-200">
    <div className="flex justify-between items-center">
      <div className="h-6 bg-slate-300 rounded-full w-24" />
      <div className="h-6 bg-slate-300 rounded-full w-20" />
    </div>
    <div className="space-y-4">
      <div className="h-7 bg-slate-300 rounded-lg w-4/5" />
      <div className="h-4 bg-slate-300 rounded w-2/3" />
      <div className="h-20 bg-slate-300 rounded-2xl w-full" />
      <div className="flex justify-between items-center pt-2">
        <div className="h-4 bg-slate-300 rounded w-36" />
        <div className="w-8 h-8 bg-slate-300 rounded-full" />
      </div>
    </div>
  </div>
);

const TripCards = ({ mode = "all" }) => {
  // Category sections state: each item is { category, totalCount, hasMore, trips, allTripsCache }
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);

  // Search & Filter State
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  // Loading state per category when clicking "Load More"
  const [loadingMoreMap, setLoadingMoreMap] = useState({});

  // Debounce search query input (350ms) for server-side search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchInput.trim());
    }, 350);
    return () => clearTimeout(handler);
  }, [searchInput]);

  // Fetch initial 3 itineraries per category with server-side search
  const fetchCategoryTrips = useCallback(async (searchQuery = "") => {
    try {
      if (searchQuery) {
        setIsSearching(true);
      } else {
        setLoading(true);
      }
      setError(null);

      const params = new URLSearchParams();
      params.append("byCategory", "true");
      params.append("limitPerCategory", "3");
      if (searchQuery) {
        params.append("search", searchQuery);
      }

      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/trips?${params.toString()}`
      );

      // Handle both new backend response format and fallback array
      if (res.data && Array.isArray(res.data.categories)) {
        // Backend returned pre-grouped categories with 3 trips per category
        setCategoriesData(
          res.data.categories.map((c) => ({
            category: c.category || "Featured",
            totalCount: c.totalCount || c.trips.length,
            hasMore: Boolean(c.hasMore),
            trips: c.trips || [],
            allTripsCache: null, // Fetched dynamically on load more
          }))
        );
      } else if (Array.isArray(res.data)) {
        // Fallback for deployed backend before Vercel redeployment
        let tripsList = res.data;

        // Apply client-side search fallback if server returned unfiltered
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          tripsList = tripsList.filter((trip) => {
            const titleMatch = (trip.title || "").toLowerCase().includes(q);
            const subMatch = (trip.subTitle || "").toLowerCase().includes(q);
            const catMatch = (trip.category || "").toLowerCase().includes(q);
            const startMatch = (trip.startPoint || "").toLowerCase().includes(q);
            const endMatch = (trip.endPoint || "").toLowerCase().includes(q);
            const highlightMatch =
              Array.isArray(trip.highlights) &&
              trip.highlights.some((h) => String(h).toLowerCase().includes(q));
            return (
              titleMatch ||
              subMatch ||
              catMatch ||
              startMatch ||
              endMatch ||
              highlightMatch
            );
          });
        }

        // Group into categories, taking only 3 per category initially
        const groups = {};
        tripsList.forEach((trip) => {
          const cat = trip.category || "Uncategorized";
          if (!groups[cat]) groups[cat] = [];
          groups[cat].push(trip);
        });

        const formatted = Object.entries(groups).map(([cat, list]) => ({
          category: cat,
          totalCount: list.length,
          hasMore: list.length > 3,
          trips: list.slice(0, 3),
          allTripsCache: list, // full list preserved in cache
        }));

        setCategoriesData(formatted);
      }
    } catch (err) {
      console.error("Failed to fetch trips:", err);
      setError("Unable to load expeditions. Please check your connection.");
    } finally {
      setLoading(false);
      setIsSearching(false);
    }
  }, []);

  // Trigger server-side fetch on search query changes
  useEffect(() => {
    fetchCategoryTrips(debouncedSearch);
  }, [debouncedSearch, fetchCategoryTrips]);

  // Handler to fetch or reveal more trips for a specific category
  const handleLoadMoreCategory = async (catName) => {
    setLoadingMoreMap((prev) => ({ ...prev, [catName]: true }));

    try {
      const targetSection = categoriesData.find((c) => c.category === catName);

      if (targetSection && targetSection.allTripsCache) {
        // If we have cached items from array response, reveal them immediately
        setCategoriesData((prev) =>
          prev.map((c) => {
            if (c.category !== catName) return c;
            return {
              ...c,
              trips: c.allTripsCache,
              hasMore: false,
            };
          })
        );
      } else {
        // Fetch next batch from backend for this category
        const currentCount = targetSection ? targetSection.trips.length : 3;
        const params = new URLSearchParams();
        params.append("category", catName);
        params.append("skip", String(currentCount));
        params.append("limit", "12");
        if (debouncedSearch) params.append("search", debouncedSearch);

        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/trips?${params.toString()}`
        );

        const newTrips = Array.isArray(res.data)
          ? res.data
          : res.data.trips || [];
        const hasMoreNext =
          res.data && typeof res.data.hasMore === "boolean"
            ? res.data.hasMore
            : false;

        setCategoriesData((prev) =>
          prev.map((c) => {
            if (c.category !== catName) return c;
            const combinedTrips = [...c.trips, ...newTrips];
            return {
              ...c,
              trips: combinedTrips,
              hasMore: hasMoreNext,
            };
          })
        );
      }
    } catch (err) {
      console.error(`Failed to load more for ${catName}:`, err);
    } finally {
      setLoadingMoreMap((prev) => ({ ...prev, [catName]: false }));
    }
  };

  // Filter category sections by selected category and difficulty
  const displayedSections = useMemo(() => {
    return categoriesData
      .filter((sec) => {
        if (selectedCategory === "All") return true;
        return sec.category === selectedCategory;
      })
      .map((sec) => {
        let trips = sec.trips;
        if (selectedDifficulty !== "All") {
          const diffLower = selectedDifficulty.toLowerCase();
          trips = trips.filter((t) => {
            const td = (t.difficulty || "").toLowerCase();
            if (diffLower === "easy") return td.includes("easy");
            if (diffLower === "moderate") return td.includes("moderate");
            if (diffLower === "challenging")
              return td.includes("challeng") || td.includes("hard");
            return true;
          });
        }
        return {
          ...sec,
          filteredTrips: trips,
        };
      })
      .filter((sec) => sec.filteredTrips.length > 0);
  }, [categoriesData, selectedCategory, selectedDifficulty]);

  // Overall categories list for tabs
  const categoryPills = useMemo(() => {
    const totalAll = categoriesData.reduce((acc, c) => acc + c.totalCount, 0);
    return [
      { name: "All", count: totalAll },
      ...categoriesData.map((c) => ({ name: c.category, count: c.totalCount })),
    ];
  }, [categoriesData]);

  const totalVisibleTrips = useMemo(() => {
    return displayedSections.reduce((acc, s) => acc + s.filteredTrips.length, 0);
  }, [displayedSections]);

  const hasActiveFilters =
    searchInput !== "" ||
    selectedCategory !== "All" ||
    selectedDifficulty !== "All";

  const resetFilters = () => {
    setSearchInput("");
    setDebouncedSearch("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
  };

  const showAll = mode === "all";

  return (
    <div
      className="pt-24 pb-20 min-h-screen bg-gradient-to-b from-orange-50/40 via-white to-slate-50 text-slate-800"
      id="itinerary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-700 text-xs sm:text-sm font-semibold tracking-wide">
            <Compass className="w-4 h-4 text-orange-600" />
            <span className="uppercase">Curated Expeditions & High Passes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Handcrafted Journeys for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              Adventurous Spirit
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Step away from crowded tourist circuits. Explore untouched Himalayan
            valleys, pristine high-altitude lakes, and authentic homestays
            designed with personal pacing and zero footprint.
          </p>
        </div>

        {/* Interactive Search & Filter Controls */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200/80 mb-12 space-y-4 sm:space-y-5">
          {/* Top row: Server-side Search input + Difficulty selector */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Live Server-Side Search */}
            <div className="relative flex-grow">
              {isSearching ? (
                <Loader2 className="w-5 h-5 text-orange-500 absolute left-4 top-1/2 -translate-y-1/2 animate-spin" />
              ) : (
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              )}
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search by destination (e.g. Spiti, Chandratal, Ladakh, Kinnaur)..."
                className="w-full pl-12 pr-10 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Difficulty Toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 pl-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Pacing:</span>
              </span>
              <div className="inline-flex rounded-2xl bg-slate-100 p-1 border border-slate-200">
                {["All", "Easy", "Moderate", "Challenging"].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedDifficulty === diff
                        ? "bg-white text-orange-600 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: Category Pills */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 flex-wrap">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider pr-1">
                Category:
              </span>
              {categoryPills.map((cat) => {
                const isActive = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Reset button if filters active */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 cursor-pointer py-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        {!loading && !error && (
          <div className="flex items-center justify-between mb-8 px-1">
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Showing{" "}
              <strong className="text-slate-900 font-bold">
                {totalVisibleTrips}
              </strong>{" "}
              itineraries across{" "}
              <strong className="text-slate-900 font-bold">
                {displayedSections.length}
              </strong>{" "}
              categories
              {hasActiveFilters && " (filtered)"}
            </p>
            {hasActiveFilters && (
              <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                Live Filtered Results
              </span>
            )}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12 px-6 rounded-3xl bg-rose-50 border border-rose-200 max-w-lg mx-auto space-y-4">
            <p className="text-rose-700 text-sm font-semibold">{error}</p>
            <button
              onClick={() => fetchCategoryTrips(debouncedSearch)}
              className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Loading Skeleton Grid */}
        {loading && (
          <div className="space-y-12">
            {[1, 2].map((group) => (
              <div key={group} className="space-y-6">
                <div className="h-7 w-52 bg-slate-200 rounded-lg animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {[1, 2, 3].map((n) => (
                    <TripSkeletonCard key={n} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Categories Sections - 3 Itineraries per category + Load More Button */}
        {!loading && !error && displayedSections.length > 0 && (
          <div className="space-y-16">
            {displayedSections.map((sec) => {
              const isLoadingThisCategory = Boolean(loadingMoreMap[sec.category]);
              const remainingCount = sec.totalCount - sec.trips.length;

              return (
                <section
                  key={sec.category}
                  className="space-y-6 pb-4 border-b border-slate-200/60 last:border-b-0"
                >
                  {/* Category Section Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-2xl bg-orange-100/70 border border-orange-200">
                        {getCategoryIcon(sec.category)}
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                          {sec.category}
                        </h2>
                        <p className="text-xs text-slate-500 font-medium">
                          Showing {sec.filteredTrips.length} of {sec.totalCount} expeditions in this category
                        </p>
                      </div>
                    </div>

                    <span className="self-start sm:self-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                      {sec.totalCount} Available
                    </span>
                  </div>

                  {/* 3 Itineraries Grid */}
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                  >
                    <AnimatePresence>
                      {sec.filteredTrips.map((trip, idx) => (
                        <Link
                          to={`/travel_itinerary/${trip.id}/${encodeURIComponent(
                            trip.title
                          )}`}
                          key={trip.id}
                          className="block focus:outline-none"
                        >
                          <ImmersiveCard trip={trip} idx={idx} />
                        </Link>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Load More Button for 4th+ Itinerary */}
                  {sec.hasMore && (
                    <div className="flex justify-center pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoadingThisCategory}
                        onClick={() => handleLoadMoreCategory(sec.category)}
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white hover:bg-orange-50 border-2 border-orange-500 text-orange-600 hover:text-orange-700 font-bold text-xs sm:text-sm shadow-md hover:shadow-orange-500/10 transition-all cursor-pointer disabled:opacity-60"
                      >
                        {isLoadingThisCategory ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-orange-600" />
                            <span>Fetching Itineraries...</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 text-orange-600" />
                            <span>
                              Load More {sec.category}
                              {remainingCount > 0 ? ` (${remainingCount} more)` : ""}
                            </span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {/* Empty State when no results match search/filter */}
        {!loading && !error && displayedSections.length === 0 && (
          <div className="text-center py-16 px-6 rounded-3xl bg-white border border-slate-200/80 shadow-md max-w-xl mx-auto space-y-5">
            <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto shadow-inner">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">
                No Expeditions Match Your Criteria
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                We couldn't find any trips matching your current search or
                filters. Try searching with different keywords or reset all
                filters.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset All Filters</span>
              </button>
              <a
                href="https://wa.me/918091790220?text=Hi%20Sunil,%20I%20am%20looking%20for%20a%20custom%20trip%20not%20listed%20on%20the%20itinerary%20page."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Ask for Custom Route</span>
              </a>
            </div>
          </div>
        )}

        {/* See More button for mode !== 'all' */}
        {!loading && !showAll && (
          <div className="flex justify-center mt-12">
            <Link to="/itinerary">
              <button className="px-8 py-3.5 text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 font-bold text-sm cursor-pointer">
                View All Expeditions
              </button>
            </Link>
          </div>
        )}

        {/* Bottom Banner: Custom Itinerary & Tailored Expedition Support */}
        <div className="mt-20 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-orange-950 text-white p-8 sm:p-12 relative shadow-2xl border border-white/10">
          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Expeditions & Bespoke Travel</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Looking for a Custom Trail or Private Group Date?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              We curate private departures, college trekking batches, and
              bespoke family journeys across Himachal, Spiti, Ladakh, and
              Uttarakhand. Travel with vetted mountain drivers and certified
              local guides.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Trace Camping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Small Batches (Max 10-12)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Native Mountain Guides</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20custom%20trip%20with%20Better%20Backpacking%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm border border-white/25 backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Submit Inquiry Form</span>
                <ArrowRight className="w-4 h-4 text-orange-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCards;
