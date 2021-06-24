# Generated by Django 3.1.4 on 2020-12-25 07:58

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='aboutpage',
            name='about_section',
            field=wagtail.core.fields.StreamField([('Section_Block', wagtail.core.blocks.StructBlock([('section_pictue', wagtail.images.blocks.ImageChooserBlock(blank=True, null=True, required=False)), ('section_title', wagtail.core.blocks.CharBlock(blank=True, max_lenght=500, null=True, required=True)), ('section_description', wagtail.core.blocks.RichTextBlock(blank=True, max_lenght=500, null=True, required=True))]))], blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='aboutpage',
            name='hero_about',
            field=wagtail.core.fields.StreamField([('Title', wagtail.core.blocks.CharBlock()), ('subtitle', wagtail.core.blocks.CharBlock()), ('profile_image', wagtail.images.blocks.ImageChooserBlock())], blank=True, null=True),
        ),
    ]