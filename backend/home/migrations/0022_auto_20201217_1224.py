# Generated by Django 3.1.4 on 2020-12-17 06:54

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0021_auto_20201217_1223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='footer',
            field=wagtail.core.fields.StreamField([('link_group', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(blank=True, max_lenght=500, null=True, required=True)), ('links', wagtail.core.blocks.StructBlock([('link', wagtail.core.blocks.PageChooserBlock())]))]))], blank=True, null=True),
        ),
    ]
