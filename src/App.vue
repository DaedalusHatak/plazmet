<template>
	<v-app>
		<v-app-bar app>
			<v-toolbar-title
				><v-img
					v-if="theme.global.name.value === 'dark'"
					contain
					max-height="60"
					max-width="60"
					src="./assets/whitelogo.png"
				></v-img>
				<v-img
					v-else-if="theme.global.name.value === 'light'"
					contain
					max-height="60"
					max-width="60"
					src="./assets/logo.png"
				></v-img>
			</v-toolbar-title>
			<v-switch
				class="pr-5 d-flex align-left"
				color="primary"
				@click="toggleTheme"
			></v-switch>
			<v-app-bar-nav-icon
				class="hidden-sm-and-up"
				variant="text"
				@click="drawer = !drawer"
			>
			</v-app-bar-nav-icon>

			<v-toolbar-items class="hidden-xs">
				<div class="menu-btn" v-for="items in items">
					<v-btn
						v-if="items.title !== 'Usługi'"
						flat
						:key="items.value"
						:to="items.link"
						>{{ items.title }}</v-btn
					>
					<v-menu v-else open-delay="100" open-on-hover>
						<template v-slot:activator="{ props }">
							<v-btn color="primary" v-bind="props"> Usługi  <v-icon icon="mdi:mdi-chevron-down" /> </v-btn>
						</template>

						<v-list>
							<v-list-item
								flat
								link
								class="list-item"
								v-for="(item, index) in items.children"
								:key="index"
								:value="index"
								:to="item.link"
							>
								{{ item.title }}
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
			</v-toolbar-items>
		</v-app-bar>

		<v-navigation-drawer
			class="hidden-sm-and-up"
			disable-route-watcher
			disable-resize-watcher
			v-model="drawer"
			bottom
			temporary
		>
			<v-list>
				<div v-for="items in items">
					<v-btn
						v-if="items.title !== 'Usługi'"
						size="x-large"
						flat
						block
						@click="drawer = !drawer"
						nav
						:key="items.title"
						:to="items.link"
						>{{ items.title }}</v-btn
					>
					<div class="mobile-menu" v-else>
						<v-btn size="x-large" flat block @click="drawer = !drawer"  v-for="item in items.children" :to="item.link">
							{{ item.title }}
						</v-btn>
					</div>
				</div>
			</v-list>
		</v-navigation-drawer>
		<!-- Sizes your content based upon application components -->
		<v-main class="text-center">
			<!-- Provides the application the proper gutter -->

			<!-- If using vue-router -->
			<router-view></router-view>
		</v-main>
		<v-footer class="bg-dark text-white">
			<v-container class="footer-width mx-auto">
				<v-row class="justify-space-between my-4 text-left">
					<v-col cols="12" sm="4" md="4" class="py-5 pr-0 text-left">
						<v-img
							class="img-footer"
							src="./assets/whitelogo.png"
						></v-img>
						<div class="pl-3">
							<p class="text-body-2">Ciesielska 2/lok.12</p>
							<p><b>15-542 Białystok</b></p>
							<p class="my-4">
								<a href="tel:+48 602 615 104">+48 602 615 104</a></p
							>

							<p class="footer-mail">
								<a href="mailto:plazmetbialystok@o2.pl"
									>plazmetbialystok@o2.pl</a
								></p
							>
						</div>
					</v-col>
					<v-col class="py-5 pl-0 pl-sm-5 pr-0" cols="12" sm="4" md="4">
						<v-list class="pa-0 bg-dark text-white">
							<h2 class="ml-5 ml-sm-0">Godziny otwarcia</h2>
							<v-list-item
								><p class="ml-5 ml-sm-0">Poniedziałek - Piątek: 8.00–16.00</p>
							</v-list-item>
							<v-list-item
								><p class="ml-5 ml-sm-0">Sobota: nieczynne (do odwołania)</p>
							</v-list-item>
							<v-list-item
								><p class="ml-5 ml-sm-0">Niedziela: nieczynne</p>
							</v-list-item>
						</v-list>
					</v-col>
					<v-col cols="12" sm="3" md="4" class="py-5 pr-sm-4 align-center">
						<h2>O firmie</h2>
						<p class="py-5 pr-0"
							><b>Plazmet</b> to firma założona w 2011 roku, specjalizująca się w precyzyjnych usługach cięcia tlenem, wodą, piłą taśmową oraz spawania. <br/> <br/> Dzięki indywidualnemu podejściu do każdego zlecenia, zapewniamy najwyższą jakość usług, dopasowaną do potrzeb naszych klientów.</p
						>
					</v-col>
				</v-row>
			</v-container>
		</v-footer>
	</v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import router from './router';
const drawer = ref(false);
const themie = 'light';
const items = [
	{ title: 'Start', value: 'home', link: '/' },
	{
		title: 'Usługi',
		value: 'uslugi',
		children: [
			{ title: 'Cięcie tlenem', value: 'plazmet', link: '/ciecie-tlenem' },
			{ title: 'Cięcie wodą', value: 'waterjet', link: '/waterjet' },
		],
	},
	{ title: 'Galeria', value: 'gallery', link: '/galeria' },
	{ title: 'Kontakt', value: 'about', link: '/about' },
];

const theme = useTheme();
function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
	localStorage.themeRecognition = theme.global.name.value;
}
</script>

<style>
.padding {
	padding: 5px 20px !important;
}
.v-footer .v-row {
	margin: 0;
}
.v-footer {
	width: 100%;
}
.footer-width {
	max-width: 1200px;
}
.v-footer .v-list-item {
	padding: 20px 0 20px 0 !important;
	border-bottom: #fff 1px solid;
}
.footer-mail {
	word-break: break-all;
}
.menu-btn {
	display: flex;
}
.mobile-menu {
	position: relative;
}
.mobile-menu:before {
	content: '';
	position: absolute;
	border-bottom: 5px solid black;
}
.list-item {
	padding: 20px 20px !important;
}
.v-switch {
	max-width: 50px;
}
.v-switch__thumb {
	color: #212121;
}
.bg-dark {
	background-color: #292c2f;
}
.v-footer {
	padding: 0;
	margin: 0;
	min-height: 300px !important;
}
.v-footer p {
	padding: 8px 0 0 0 !important;
}

.v-footer a {
	text-decoration: none;
	color: orange;
}
.v-footer .v-img {
	max-width: 160px;
	max-height: 160px;
	width: 100% !important;
	height: auto !important;
}
</style>
