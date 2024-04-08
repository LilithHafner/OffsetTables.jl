import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.CLXHkDAQ.js";const E=JSON.parse('{"title":"AliasTables","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}'),l={name:"index.md"},n=e(`<h1 id="AliasTables" tabindex="-1">AliasTables <a class="header-anchor" href="#AliasTables" aria-label="Permalink to &quot;AliasTables {#AliasTables}&quot;">​</a></h1><p><a href="https://github.com/LilithHafner/AliasTables.jl" target="_blank" rel="noreferrer">AliasTables</a> provides the <a href="/previews/PR32/index#AliasTables.AliasTable"><code>AliasTable</code></a> type, which is an object that defines a probability distribution over <code>1:n</code> for some <code>n</code>. They are efficient to construct and very efficient to sample from.</p><h2 id="Constructing-an-AliasTable" tabindex="-1">Constructing an AliasTable <a class="header-anchor" href="#Constructing-an-AliasTable" aria-label="Permalink to &quot;Constructing an AliasTable {#Constructing-an-AliasTable}&quot;">​</a></h2><p>Construct an AliasTable by calling <a href="/previews/PR32/index#AliasTables.AliasTable"><code>AliasTable(probabilities)</code></a> for some collection of probabilities. For example, to create a table with a 30% chance of returning 1, and a 70% chance of returning 2, you would call <code>AliasTable([0.3, 0.7])</code>.</p><p><code>probabilities</code> must be an abstract vector of real numbers. The sum need not be 1 as the input will be automatically normalized.</p><h2 id="Sampling-from-an-AliasTable" tabindex="-1">Sampling from an AliasTable <a class="header-anchor" href="#Sampling-from-an-AliasTable" aria-label="Permalink to &quot;Sampling from an AliasTable {#Sampling-from-an-AliasTable}&quot;">​</a></h2><p>Sample from an <code>AliasTable</code> the same way you would sample from any sampleable object using the Random API. For example, to draw a single sample, call <code>rand(at::AliasTable)</code>, to draw <code>n</code> samples, call <code>rand(at::AliasTable, n)</code>, to sample using a specific random number generator, call <code>rand(rng::Random.AbstractRNG, at::AliasTable)</code>, and to populate an existing array, call <code>rand!(x, at::AliasTable)</code>.</p><h2 id="Example" tabindex="-1">Example <a class="header-anchor" href="#Example" aria-label="Permalink to &quot;Example {#Example}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AliasTables</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> at </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x5000000000000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xa000000000000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x1000000000000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element Vector{Int64}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AliasTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">probabilities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(float, at)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element Vector{Float64}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.3125</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.625</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0625</span></span></code></pre></div><h2 id="Implementation-details" tabindex="-1">Implementation details <a class="header-anchor" href="#Implementation-details" aria-label="Permalink to &quot;Implementation details {#Implementation-details}&quot;">​</a></h2><p>Alias tables are composed of a list of (acceptance probability, alias) pairs. To sample from an alias table, first pick an element <code>(p, alias)</code> from that list uniformly at random. Then, with probability <code>p</code>, return the index of that element and with probability <code>1-p</code>, return <code>alias</code>. For more information, see the <a href="https://en.wikipedia.org/wiki/Alias_method" target="_blank" rel="noreferrer">wikipedia article</a>, or a publication by the original author <a href="https://lilithhafner.com/An-Efficient-Method-for-Generating-Discrete-Random-Variables-with-General-Distributions.pdf" target="_blank" rel="noreferrer">Walker, A. J. &quot;An Efficient Method for Generating Discrete Random Variables with General Distributions.&quot; <em>ACM Transactions on Mathematical Software</em> 3 (3): 253, 1977.</a></p><hr><p>While this package does follow the general structure of the algorithms described in the above articles, it makes some departures for performance reasons.</p><p>Conventional alias tables map an integer in the range <code>1:n</code> and a real number to a number in the range <code>1:n</code>. This package&#39;s alias tables, however, map an integer in the range <code>0:2^k-1</code> to a number in the range <code>1:n</code>. Where <code>k = 64</code> by default. This results in increased precision and increased performance.</p><p>To apply this mapping to <code>x</code> using an alias table with <code>2^b</code> elements, we use the most significant <code>b</code> bits of <code>x</code> to index into the table, retrieving a pair <code>(p, alias)</code>. We then compare the least significant <code>k</code> bits of <code>x</code> to <code>p</code>, and if <code>x</code>&#39;s low bits are less than <code>p</code>, we return the aliased index, otherwise we return the index itself. Any finite probability distribution can be thought of as a distribution over <code>2^b</code> elements by simply appending zeros to the end of the distribution.</p><p>This whole process uses integer arithmetic which allows both very fast sampling and exact construction.</p><p>We can count exactly how many inputs map to a given output as follows.</p><p>For a given output <code>m ∈ 1:n</code>, drawn from an <code>AliasTable{UIntK}</code> with a <code>k</code>-bit domain and a range of <code>1:2^b</code>, the inputs that produce <code>m</code> come from two disjoint sets</p><ul><li><p>The integers between <code>m * 2^(k-b) + p</code>, inclusive, and <code>(m+1) * 2^(k-b)</code>, exclusive where <code>p</code> is the alias probability of the <code>m</code>th table entry. This set has <code>2^(k-b) - p</code> elements.</p></li><li><p>The integers between <code>j * 2^(k-b)</code>, inclusive and <code>j + 2^(k-b) + p_j</code>, exclusive for all <code>j</code> whose table entry aliases to <code>m</code> where <code>p_j</code> is alias probability of the <code>j</code>th table entry. This set has size <code>sum(p_j for j in 1:n if alias_j == m)</code>.</p></li></ul><p>The default constructors in this package utilize those formulae to produce alias tables that can exactly represent any distribution where all probabilities are of the form <code>p/2^k</code> for some integer <code>p</code>.</p><h2 id="Alternate-sampling-API" tabindex="-1">Alternate sampling API <a class="header-anchor" href="#Alternate-sampling-API" aria-label="Permalink to &quot;Alternate sampling API {#Alternate-sampling-API}&quot;">​</a></h2><p>You can bypass the Random API and sample directly from an alias table <code>at::AliasTable{T}</code> using the public <a href="/previews/PR32/index#AliasTables.sample"><code>AliasTables.sample</code></a> function which is branchless, deterministic, and not pseudorandom. If given an input drawn uniformly at random from the domain of <code>T</code>, this method will produce a sample drawn from the distribution represented by <code>at</code>.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="AliasTables.sample-index" href="#AliasTables.sample-index">#</a> <b><u>AliasTables.sample</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, at</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable{T, I}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> I</span></span></code></pre></div><p>Sample from <code>at</code> using the seed <code>x</code>.</p><p>If <code>x</code> is chosen uniformly at random from the set of all values representable by <code>T</code> then the output will be a random sample from the distribution represented by <code>at</code>. The mapping is deterministic and not pseudo-random so for patterned input <code>x</code> the output will be patterned as well.</p><p>See also <a href="/previews/PR32/index#AliasTables.AliasTable"><code>AliasTable</code></a>, <a href="/previews/PR32/index#AliasTables.probabilities"><code>AliasTables.probabilities</code></a></p><p><a href="https://github.com/LilithHafner/AliasTables.jl/blob/f0a4331f70213df7e0503bc41633d832d51afc83/src/AliasTables.jl#L238-L249" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Performance-characteristics" tabindex="-1">Performance characteristics <a class="header-anchor" href="#Performance-characteristics" aria-label="Permalink to &quot;Performance characteristics {#Performance-characteristics}&quot;">​</a></h2><p>Constructing an <code>AliasTable{T}</code> is O(n) in the number of elements in the input collection, with a low constant factor. Sampling itself is O(1) with a very low constant factor. It is branchless, involves one random array read, and takes about 20 instructions more than <code>rand(T)</code>.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Chairmarks</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) AliasTable</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13.250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> allocs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 23.906</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KiB)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) rand</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.059</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ns</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UInt64)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.891</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ns</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.588</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> μs (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> allocs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7.875</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KiB)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UInt64, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">606.870</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ns (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> allocs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7.875</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KiB)</span></span></code></pre></div><p>Bulk generation of UInt64 has hand written llvm instructions to support SIMD, while alias tables don&#39;t SIMD as nicely and have not been as aggressively optimized; hence the difference in bulk generation time while scalar generation time is similar.</p><h2 id="Docstrings" tabindex="-1">Docstrings <a class="header-anchor" href="#Docstrings" aria-label="Permalink to &quot;Docstrings {#Docstrings}&quot;">​</a></h2><p>The docstring for the <a href="/previews/PR32/index#AliasTables.AliasTable"><code>AliasTable</code></a> constructor defines the API for constructing <code>AliasTable</code>s, the <a href="/previews/PR32/index#AliasTables.probabilities"><code>AliasTables.probabilities</code></a> function allows recovery of the exact sampling probabilities provided by an <code>AliasTable</code>, and the <a href="/previews/PR32/index#AliasTables.sample"><code>AliasTables.sample</code></a> function provides an alternative API for sampling from <code>AliasTable</code>s.</p><p>However, the primary sampling API is the Random API. <code>AliasTable</code>s may be used as a sampling domain according to the specifications layed out by the Random stdlib.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="AliasTables.AliasTable" href="#AliasTables.AliasTable">#</a> <b><u>AliasTables.AliasTable</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable{T&lt;:Unsigned=UInt, I&lt;:Integer=Int}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(weights</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractVector{&lt;:Real}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>An efficient data structure for sampling from a discrete distribution.</p><p>Maps every value representable by <code>T</code> to a value of type <code>I</code> in <code>eachindex(wights)</code> such that the number of values maped to a given index of <code>weights</code> is proportional to the value at that index.</p><p>The mapping can be accessed directly via <a href="/previews/PR32/index#AliasTables.sample"><code>AliasTables.sample(x::T, at::AliasTable{T, I})</code></a> or indirectly via the <code>Random</code> API: <code>rand(at)</code>, <code>rand(rng, at)</code>, <code>rand(at, dims...)</code>, etc.</p><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> at </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x3333333333333334</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x9999999999999999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x3333333333333333</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element Vector{Int64}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre></div><p><a href="https://github.com/LilithHafner/AliasTables.jl/blob/f0a4331f70213df7e0503bc41633d832d51afc83/src/AliasTables.jl#L22-L49" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="AliasTables.sample" href="#AliasTables.sample">#</a> <b><u>AliasTables.sample</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sample</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, at</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable{T, I}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> I</span></span></code></pre></div><p>Sample from <code>at</code> using the seed <code>x</code>.</p><p>If <code>x</code> is chosen uniformly at random from the set of all values representable by <code>T</code> then the output will be a random sample from the distribution represented by <code>at</code>. The mapping is deterministic and not pseudo-random so for patterned input <code>x</code> the output will be patterned as well.</p><p>See also <a href="/previews/PR32/index#AliasTables.AliasTable"><code>AliasTable</code></a>, <a href="/previews/PR32/index#AliasTables.probabilities"><code>AliasTables.probabilities</code></a></p><p><a href="https://github.com/LilithHafner/AliasTables.jl/blob/f0a4331f70213df7e0503bc41633d832d51afc83/src/AliasTables.jl#L238-L249" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="AliasTables.probabilities" href="#AliasTables.probabilities">#</a> <b><u>AliasTables.probabilities</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">probabilities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable{T}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vector{T}</span></span></code></pre></div><p>Recover the exact sampling weights from a given <code>AliasTable</code>. The returned values will sum to one more than <code>typemax(T)</code>, unless <code>at</code> is a constant distribution (e.g. <code>AliasTable([0,1,0])</code>), in which case the weights will sum to <code>typemax(T)</code>.</p><p>See also <a href="/previews/PR32/index#AliasTables.AliasTable"><code>AliasTable</code></a>, <a href="/previews/PR32/index#AliasTables.sample"><code>AliasTables.sample</code></a></p><p><strong>Examples</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> at </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x3333333333333334</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x9999999999999999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x3333333333333333</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AliasTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">probabilities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element Vector{UInt64}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x3333333333333334</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x9999999999999999</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x3333333333333333</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AliasTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">probabilities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element Vector{UInt64}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x0000000000000000</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xffffffffffffffff</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x0000000000000000</span></span></code></pre></div><p><a href="https://github.com/LilithHafner/AliasTables.jl/blob/f0a4331f70213df7e0503bc41633d832d51afc83/src/AliasTables.jl#L308-L335" target="_blank" rel="noreferrer">source</a></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">probabilities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(float, at</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable{T}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vector{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Return the sampling probabilities of <code>at</code>. The returned vector will sum to 1.0, up to rounding error.</p><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> AliasTables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">probabilities</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(float, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element Vector{Float64}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.6</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span></span></code></pre></div><p><a href="https://github.com/LilithHafner/AliasTables.jl/blob/f0a4331f70213df7e0503bc41633d832d51afc83/src/AliasTables.jl#L351-L366" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Base.length-Tuple{AliasTable}" href="#Base.length-Tuple{AliasTable}">#</a> <b><u>Base.length</u></b> — <i>Method</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(at</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Get the number of weights that <code>at</code> was constructed with, including trailing zeros.</p><p><strong>Example</strong></p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">julia</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AliasTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span></code></pre></div><p><a href="https://github.com/LilithHafner/AliasTables.jl/blob/f0a4331f70213df7e0503bc41633d832d51afc83/src/AliasTables.jl#L371-L382" target="_blank" rel="noreferrer">source</a></p></div><br>`,39),t=[n];function h(p,k,r,d,o,c){return a(),i("div",null,t)}const b=s(l,[["render",h]]);export{E as __pageData,b as default};
