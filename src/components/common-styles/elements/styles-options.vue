<template>
	<div class="options-wrapper width100 ml-10">
		<v-expansion-panels>
			<v-expansion-panel>
				<v-expansion-panel-header>
					<span>Фон</span>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-row>
						<v-col>
							<v-select
								:items="backgroundItems"
								v-model="previewStyles.backgroundType"
								item-text="title"
								item-value="type"
								label="Тип фона"
							></v-select>
						</v-col>
						<v-col v-if="previewStyles.backgroundType === 'color'">
							<v-color-picker
								dot-size="25"
								swatches-max-height="200"
								mode="hexa"
								v-model="previewStyles.backgroundColor"
							></v-color-picker>
						</v-col>
						<v-col v-if="previewStyles.backgroundType === 'image'">
							<v-file-input
								truncate-length="18"
								:accept="allowedFIleTypes"
								v-model="previewStyles.backgroundImgFile"
								@change="setBackgroundImage('previewStyles')"
							></v-file-input>
						</v-col>
						<v-col v-if="previewStyles.backgroundType === 'gradient'">
							<v-textarea v-model="previewStyles.backgroundGradient"
													outlined></v-textarea>
						</v-col>
					</v-row>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header>
					<span>Обводка</span>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-row>
						<v-col>
							<v-checkbox
								v-model="previewStyles.needBorder"
								label="Добавить бордер"
							></v-checkbox>
						</v-col>
						<v-col>
							<v-text-field v-model="previewStyles.borderWidth" class="width100" type="number"
														min="2" max="10" suffix="px"></v-text-field>
							<v-color-picker
								class="mx-auto"
								dot-size="25"
								swatches-max-height="200"
								mode="hexa"
								v-model="previewStyles.borderColor"
							></v-color-picker>
						</v-col>
					</v-row>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header>
					<span>Вопрос: цвет текста</span>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-color-picker
						class="mx-auto"
						dot-size="25"
						swatches-max-height="200"
						mode="hexa"
						v-model="questionStyles.color"
					></v-color-picker>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header>
					<span>Ответ: цвет текста</span>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-color-picker
						class="mx-auto"
						dot-size="25"
						swatches-max-height="200"
						mode="hexa"
						v-model="answerStyles.color"
					></v-color-picker>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header>
					<span>Чекбокс</span>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-file-input
						truncate-length="18"
						:accept="allowedFIleTypes"
						v-model="uncheckStyles.backgroundImgFile"
						@change="setBackgroundImage('uncheckStyles')"
					></v-file-input>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header>
					<span>Чекбокс выбранный</span>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-file-input
						truncate-length="18"
						:accept="allowedFIleTypes"
						v-model="checkStyles.backgroundImgFile"
						@change="setBackgroundImage('checkStyles')"
					></v-file-input>
				</v-expansion-panel-content>
			</v-expansion-panel>

			<v-expansion-panel>
				<v-expansion-panel-header>
					<span>Кнопка перехода</span>
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-file-input
						truncate-length="18"
						:accept="allowedFIleTypes"
						v-model="nextStyles.backgroundImgFile"
						@change="setBackgroundImage('nextStyles')"
					></v-file-input>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
	</div>
</template>

<script>
export default {
	name: 'styles-options',
	props: {
		previewStyles: {
			type: Object,
		},
		questionStyles: {
			type: Object,
		},
		answerStyles: {
			type: Object,
		},
		uncheckStyles: {
			type: Object,
		},
		checkStyles: {
			type: Object,
		},
		nextStyles: {
			type: Object,
		},
	},
	data() {
		return {
			allowedFIleTypes: ['image/png', '.svg'],
			backgroundItems: [
				{
					title: 'Цвет',
					type: 'color',
				},
				{
					title: 'Изображение',
					type: 'image',
				},
				{
					title: 'Градиент',
					type: 'gradient',
				},
			],
		};
	},
	methods: {
		setBackgroundImage(stylesObj) {
			const reader = new FileReader();

			reader.addEventListener('load', () => {
				this[stylesObj].backgroundImage = reader.result;
			}, false);

			if (this[stylesObj].backgroundImgFile) {
				reader.readAsDataURL(this[stylesObj].backgroundImgFile);
			}
		},
	},
};
</script>

<style scoped>

</style>
